// const filesHelpers = require("../helpers/files")
const fs = require("fs")
const sliderImgModel = require("../models/sliderImg")
const imageModel = require("../models/image")
const constants = require("../helpers/constants").files
const dirname = require("../index").dirname

// Добавление картинки в слайдер
exports.postSliderImg = async (req, res) => {
    if (!req.body || !req.file) return res.sendStatus(400)
    
    let image = {
        mimetype: req.file.mimetype,
        image: new Buffer(fs.readFileSync(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, req.file.filename)))
    }

    // Сохранение картинки
    let imageInsertedResult = await imageModel.insertImage(image)
    if (imageInsertedResult.error) {
        return res.sendStatus(400)
    }
    
    if (imageInsertedResult.data == null) {
        return res.sendStatus(400)
    }
    
    // Инициализируем картинку слайдера
    let sliderImg = {
        sliderId: parseInt(req.body.sliderId),
        position: parseInt(req.body.position),
        imageId: Object.values(imageInsertedResult.data[0])[0]
    }

    // Сохранение информации о картинке в слайдере
    let error = await sliderImgModel.insertSliderImg(sliderImg)
    if (error) {
        return res.sendStatus(400)
    }

    // Удаление файла
    fs.unlink(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, req.file.filename), (error) => {
        if (error) {
            console.log("File deleting error: " + error.code)
        }
    })

    res.sendStatus(200)
}

// Редактирование картинки в слайдере
exports.putSliderImg = async (req, res) => {
    if (!req.body) return res.sendStatus(400)
    console.log(req.file)
    if (req.body.updateFile == "true" && (req.file == undefined || req.file == null)) return res.sendStatus(400)

    let sliderImg = {
        sliderId: req.params.sliderid,
        id: req.params.id,
        position: req.body.position,
        oldPosition: req.body.oldPosition
    }
    console.log("1.")
    // Обновляем информацию о слайдере
    let updatedSliderImgResult = await sliderImgModel.updateSliderImg(sliderImg)
    if (updatedSliderImgResult.error) {
        return res.sendStatus(400)
    }
    if (updatedSliderImgResult.data == 0) {
        return res.sendStatus(304)
    }

    // Если флаг про изменение картинки отрицательный, отправляем ответ клиенту, иначе обновляем картинку
    if (req.body.updateFile != "true") {
        return res.sendStatus(200)
    }

    // Получаем картинку слайдера по id, чтобы получить id картинки, на которую он ссылается
    let selectedResult = await sliderImgModel.selectSliderImgById(sliderImg.id)
    if (selectedResult.error) {
        return res.sendStatus(400)
    }
    console.log("2.")
    let image = {
        id: selectedResult.imageId,
        image: req.body.updateFile == "true" ? new Buffer(fs.readFileSync(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, req.file.filename))) : null
    }

    // Удаление файла
    fs.unlink(constants.pathJoin(dirname, constants.DEFAULT_BUFFER_CATALOG, req.file.filename), (error) => {
        if (error) {
            console.log("File deleting error: " + error.code)
        }
    })
    
    // Обновление картинки
    let updatedImageResult = await imageModel.updateImg(image)
    if (updatedImageResult.error) {
        return res.sendStatus(400)
    }
    if (updatedImageResult.data == 0) {
        return res.sendStatus(304)
    }
    console.log("4.")
    res.sendStatus(200)
}

exports.deleteSliderImg = async (req, res) => {
    // if (!req.body) return res.sendStatus(400)
    console.log(1)
    console.log(req.params.id)
    let selectedResult = await sliderImgModel.selectSliderImgById(req.params.id)
    console.log(selectedResult.data)
    if (selectedResult.error || selectedResult.data == null) {
        return res.sendStatus(400)
    }
    console.log(2)
    let deleteSliderImg = selectedResult.data
    
    let error = await sliderImgModel.deleteSliderImg(deleteSliderImg)
    if (error) {
        return res.sendStatus(400)
    }

    error = await imageModel.deleteImage(deleteSliderImg.imageId)
    if (error) {
        return res.sendStatus(400)
    }

    res.sendStatus(200)
}