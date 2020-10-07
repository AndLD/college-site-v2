const filesHelpers = require("../helpers/files")
const fs = require("fs")
const articleModel = require("../models/article")
const constants = require("../helpers/constants").files
const dirname = require("../index").dirname

// Добавление статьи
exports.postArticle = async (req, res) => {
    if (!req.body) return res.sendStatus(400)
    
    if (req.file == undefined || req.file == null) return res.sendStatus(400)
    
    let mimetypeEnding = req.file.mimetype.split("/")[1]
    let isDocx = mimetypeEnding == "vnd.openxmlformats-officedocument.wordprocessingml.document"
    
    // Если тип отображения страницы - конвертация docx в html, то принимаемым файлом должен быть только docx
    if (req.body.viewMode != "docx_to_html" && isDocx || req.body.viewMode == "docx_to_html" && !isDocx) return res.sendStatus(400)
    // Если тип отображения страницы - html, то принимаемым файлом должен быть только html
    if (req.body.viewMode != "html" && mimetypeEnding == "html" || req.body.viewMode == "html" && mimetypeEnding != "html") return res.sendStatus(400)
    // Если тип отображения страницы - pdf, то принимаемым файлом должен быть только pdf
    if (req.body.viewMode != "pdf" && mimetypeEnding == "pdf" || req.body.viewMode == "pdf" && mimetypeEnding != "pdf") return res.sendStatus(400)

    // Инициализируем статью
    var article = {
        title: req.body.title,
        html: req.body.viewMode == "docx_to_html" ? await filesHelpers.convertDocxToHtml(req.file.filename) : ( req.body.viewMode == "html" ? fs.readFileSync(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, req.file.filename)).toString("utf8") : null ),
        docx: new Buffer(fs.readFileSync(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, req.file.filename))),
        fileFormat: isDocx ? "docx" : mimetypeEnding,
        viewMode: req.body.viewMode
    }
    
    // Удаление файла
    fs.unlink(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, req.file.filename), (error) => {
        if (error) {
            console.log("File deleting error: " + error.code)
        }
    })

    // Сохранение статьи в БД
    var error = await articleModel.insertArticle(article)
    if (error) {
        return res.sendStatus(400)
    }

    res.sendStatus(200)
}

// Изменение статьи
exports.putArticle = async (req, res) => {
    if (!req.body) return res.sendStatus(400)

    /* Если чекбокс req.body.updateFile не активен, то вместо html и docx подставляем null, 
    чтобы не делать лишних операций обновления потенциально больших бинарных данных. */

    if (req.body.updateFile == "true" && (req.file == undefined || req.file == null)) return res.sendStatus(400)

    let mimetypeEnding, isDocx
    if (req.body.updateFile == "true") {
        mimetypeEnding = req.file.mimetype.split("/")[1]
        isDocx = mimetypeEnding == "vnd.openxmlformats-officedocument.wordprocessingml.document"
    }

    // Если тип отображения страницы - конвертация docx в html, то принимаемым файлом должен быть только docx
    if (req.body.updateFile == "true" && (req.body.viewMode != "docx_to_html" && isDocx || req.body.viewMode == "docx_to_html" && !isDocx)) return res.sendStatus(400)
    // Если тип отображения страницы - html, то принимаемым файлом должен быть только html
    if (req.body.updateFile == "true" && (req.body.viewMode != "html" && mimetypeEnding == "html" || req.body.viewMode == "html" && mimetypeEnding != "html")) return res.sendStatus(400)
    // Если тип отображения страницы - pdf, то принимаемым файлом должен быть только pdf
    if (req.body.updateFile == "true" && (req.body.viewMode != "pdf" && mimetypeEnding == "pdf" || req.body.viewMode == "pdf" && mimetypeEnding != "pdf")) return res.sendStatus(400)

    // Инициализируем статью
    var article = {
        id: req.params.id,
        title: req.body.title,
        html: req.body.updateFile == "true" && req.body.viewMode == "docx_to_html" ? await filesHelpers.convertDocxToHtml(req.file.filename) : ( req.body.updateFile == "true" && req.body.viewMode == "html" ? fs.readFileSync(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, req.file.filename)).toString("utf8") : null ),
        docx: req.body.updateFile == "true" && req.body.viewMode != "html" ? new Buffer(fs.readFileSync(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, req.file.filename))) : null,
        fileFormat: req.body.updateFile == "true" ? (isDocx ? "docx" : mimetypeEnding) : null,
        viewMode: req.body.updateFile == "true" ? req.body.viewMode : null
    }

    if (req.body.updateFile == "true") {
        // Удаление файла
        fs.unlink(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, req.file.filename), (error) => {
            if (error) {
                console.log("File deleting error: " + error.code)
            }
        })
    }

    // Обновление статьи
    var updatedResult = await articleModel.updateArticle(article)
    if (updatedResult.error) {
        return res.sendStatus(400)
    }
    if (updatedResult.data == 0) {
        return res.sendStatus(304)
    }

    res.sendStatus(200)
}

exports.deleteArticle = async (req, res) => {
    // Удаление статьи из базы
    var deletedResult = await articleModel.deleteArticle(req.params.id)
    if (deletedResult.error) {
        return res.sendStatus(400)
    }
    if (deletedResult.data == 0) {
        return res.sendStatus(304)
    }

    return res.sendStatus(200)
}

exports.postDownloadArticle = async (req, res) => {
    // Получение статьи
    var selectedResult = await articleModel.selectArticleById(req.params.id)
    if (selectedResult.error) {
        return res.sendStatus(400)
    }
    if (selectedResult.data == null) {
        return res.sendStatus(204)
    }

    var article = selectedResult.data

    var filename = "article" + req.params.id + "." + article.fileFormat

    // Формируем файл
    fs.writeFileSync(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, filename), (article.viewMode == "docx_to_hmtl" || article.viewMode == "pdf" ? article.docx : article.html), (error) => {
        if (error) {
            console.log("File writing error: " + error.code)
            return res.sendStatus(400)
        }
    })

    // Отправляем файл на скачивание
    res.download(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, filename), (error) => {
        if (error) {
            console.log("Send file to download error: " + error.message)
        }

        // Удаляем созданный файл
        fs.unlinkSync(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, filename), (error) => {
            console.log("File deleting error: " + error.code)
            return res.sendStatus(400)
        })
    })
}