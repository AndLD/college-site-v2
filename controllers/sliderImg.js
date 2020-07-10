const filesHelpers = require("../helpers/files")
const fs = require("fs")
const sliderImgModel = require("../models/sliderImg")
const imageModel = require("../models/image")
const constants = require("../helpers/constants").files
const dirname = require("../index").dirname

// Добавление картинки в слайдер
exports.postSliderImg = async (req, res) => {
    if (!req.body) return res.sendStatus(400)

    if (req.file == undefined || req.file == null) return res.sendStatus(400)
    
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