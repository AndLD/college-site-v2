// Подключаем модели
var menuModel = require("../models/menu")

exports.postMenu = async (req, res) => {
    if (!req.body) return res.sendStatus(400)

    var postMenu = {
        title: req.body.title,
        link: req.body.link,
        parentId: req.body.parentId,
        position: req.body.position,
        footer: (req.body.footer == "true" ? true : false)
    }

    var error = await menuModel.insertMenu(postMenu)
    if (error) {
        return res.sendStatus(400)
    }

    res.sendStatus(200)
}

exports.putMenu = async (req, res) => {
    if (!req.body) return res.sendStatus(400)

    var putMenu = {
        id: req.params.id,
        title: req.body.title,
        link: req.body.link,
        parentId: req.body.parentId,
        position: req.body.position,
        oldPosition: req.body.oldPosition,
        footer: (req.body.footer == "true" ? true : false)
    }

    var error = await menuModel.updateMenu(putMenu)
    if (error) {
        return res.sendStatus(400)
    }

    res.sendStatus(200)
}

exports.deleteMenu = async (req, res) => {
    if(!req.body) return res.sendStatus(400)

    var deleteMenu = {
        id: req.params.id,
        parentId: req.body.parentId,
        oldPosition: req.body.oldPosition
    }

    var error = await menuModel.deleteMenu(deleteMenu)
    if (error) {
        return res.sendStatus(400)
    }

    res.sendStatus(200)
}