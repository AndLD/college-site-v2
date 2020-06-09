const filesHelpers = require("../helpers/files")
const fs = require("fs")
const newsModel = require("../models/news")
const constants = require("../helpers/constants").files
const dirname = require("../index").dirname

// Добавление новости
exports.postNews = async (req, res) => {
    if (!req.body || !req.file) return res.sendStatus(400)

    // Инициализируем новость
    var news = {
        title: req.body.title,
        addDate: new Date(req.body.addDate),
        html: await filesHelpers.convertDocxToHtml(req.file.filename),
        docx: new Buffer(fs.readFileSync(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, req.file.filename)))
    }

    // Удаляем полученный файл
    fs.unlink(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, req.file.filename), (error) => {
        if (error) {
            console.log("File deleting error: " + error.code)
        }
    })

    // Сохраняем новость в базу
    var error = await newsModel.insertNews(news)
    if (error) {
        return res.sendStatus(400)
    }

    res.sendStatus(200)
}

// Изменение новости
exports.putNews = async (req, res) => {
    if (!req.body) return res.sendStatus(400)

    if (req.body.updateFile == "true" && !req.file) return res.sendStatus(400)

    // Инициализация новости
    var news = {
        id: req.params.id,
        title: req.body.title,
        addDate: new Date(req.body.addDate),
        html: (req.body.updateFile == "true" ? await filesHelpers.convertDocxToHtml(req.file.filename) : null),
        docx: (req.body.updateFile == "true" ? new Buffer(fs.readFileSync(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, req.file.filename))) : null)
    }

    if (req.body.updateFile == "true") {
        // Удаление полученного файла
        fs.unlink(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, req.file.filename), (error) => {
            if (error) {
                console.log("File deleting error: " + error.code)
            }
        })
    }

    // Обновление новости
    var updatedResult = await newsModel.updateNews(news)
    if (updatedResult.error) {
        return res.sendStatus(400)
    }
    
    if (updatedResult.data == 0) {
        return res.sendStatus(304)
    }

    res.sendStatus(200)
}

// Удаление новости
exports.deleteNews = async (req, res) => {
    // Удаление  новсти из базы
    var deletedResult = await newsModel.deleteNews(req.params.id)
    if (deletedResult.error) {
        return res.sendStatus(400)
    }
    if (deletedResult.data == 0) {
        return res.sendStatus(304)
    }

    res.sendStatus(200)
}

// Скачивание новости
exports.postDownloadNews = async (req, res) => {
    // Получение новости по id
    var selectedResult = await newsModel.selectNewsById(req.params.id)
    if (selectedResult.error) {
        return res.sendStatus(400)
    }
    if (selectedResult.data == null) {
        return res.sendStatus(204)
    }

    var news = selectedResult.data

    var filename = "news" + req.params.id + ".docx"

    // Формируем файл
    fs.writeFileSync(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, filename), news.docx, (error) => {
        if (error) {
            console.log("File writing error: " + error.code)
            return res.sendStatus(400)
        }
    })

    res.download(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, filename), (error) => {
        if (error) {
            console.log("Send file to download error: " + error.message)
        }

        fs.unlinkSync(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, filename), (error) => {
            console.log("File deleting error: " + error.code)
            return res.sendStatus(400)
        })
    })
}