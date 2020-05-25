const userModel = require("../models/user")
const bcrypt = require("bcrypt")

// Для telegramSecret
const TokenGenerator = require("uuid-token-generator")
const token = new TokenGenerator(256, TokenGenerator.BASE36)

const CodeGenerator = require("node-code-generator")
const generator = new CodeGenerator()
exports.generator = generator

const telegramBot = require("../helpers/telegramBot")

// Регистрация пользователя (админа / модератора / группы)
exports.registerController = async (req, res) => {
    if (!req.body) return res.sendStatus(400)

    // Проверка, соответствует ли указываемый тип пользователя правам того, кто создает
    if (req.user.userrole == "moderator" && req.body.userrole != "group") {
        return res.sendStatus(403)
    }

    // Проверка, существует ли уже пользователь с таким ником
    var selectedResult = await userModel.selectUserByName(req.body.username)
    if (selectedResult.error) {
        // return res.render("user/register", { message: "Internal error." })
        return res.sendStatus(400)
    }
    if (selectedResult.data != null) {
        // return res.render("user/register", { message: "User with that login already exist."})
        return res.sendStatus(400)
    }

    // Инициализация пользователя
    var user = {
        username: req.body.username,
        pass: ( req.body.userrole == "group" ? req.body.password : await bcrypt.hash(req.body.password, 10) ),
        userrole: req.body.userrole,
        twoFactor: false,
        telegramId: null,
        twoFactorCode: null,
        telegramSecret: token.generate()
    }

    // Вставка пользователя в БД
    var error = await userModel.insertUser(user)
    if (error && !req.body.userrole) {
        // return res.render("user/register", { message: "Internal error." })
        return res.sendStatus(400)
    } else if (error) {
        return res.sendStatus(400)
    }

    res.sendStatus(200)
}

exports.loginController = async (req, res) => {
    if (req.user.twoFactor) {
        req.session.twoFactor = false

        var code = generator.generateCodes("######", 1, {})[0]
        
        var error = await userModel.saveTwoFactorCode(req.user.id, req.user.telegramId, code)
        if (error) {
            return res.sendStatus(400)
        }

        telegramBot.sendTwoFactorCode(req.user.telegramId, code)

        res.redirect("/login-otp")
    } else {
        req.session.twoFactor = true
        res.redirect("/profile")
    }
}

exports.loginOtpController = (req, res) => {
    req.session.twoFactor = true
    res.redirect("/profile")
}

exports.logoutController = (req, res) => {
    req.logout()
    req.session.twoFactor = false
    res.redirect("/login")
}

// Изменение пользователя (логин / роль)
exports.putUserController = async (req, res) => {
    // Проверка, соответствует ли указываемый тип пользователя правам того, кто редактирует
    if (req.user.userrole != "admin" && req.body.userrole != "group") {
        return res.sendStatus(403)
    }

    // Проверка, существует ли уже пользователь с таким ником, учитывая, что логин текущего пользователя мог не измениться
    let selectedResult = await userModel.selectUserByName(req.body.username)
    if (selectedResult.error) {
        return res.sendStatus(400)
    }
    if (selectedResult.data != null && selectedResult.data.length >= 2) {
        return res.sendStatus(400)
    }

    // Проверка, не пытается ли пользователь moderator изменить роль другого пользователя
    if (req.user.userrole != "admin" && req.body.userrole != selectedResult.data[0].userrole) {
        return res.sendStatus(403)
    }

    // Инициализация пользователя
    let user = {
        id: req.params.id,
        username: req.body.username,
        userrole: req.body.userrole
    }

    // Обновляем пользователя
    var updatedResult = await userModel.updateUser(user)
    if (updatedResult.error) {
        return res.sendStatus(400)
    }
    
    if (updatedResult.data == 0) {
        return res.sendStatus(304)
    }

    res.sendStatus(200)
}

// Удаление пользователя
exports.deleteUserController = async (req, res) => {
    // Проверка, не пытается ли пользователь удалить себя
    if (req.user.id == req.params.id) {
        return res.sendStatus(400)
    }

    // Получение пользователя перед удалением для проверки
    let selectedResult = await userModel.selectUserById(req.params.id)
    if (selectedResult.error) {
        return res.sendStatus(400)
    }
    if (selectedResult.data == null) {
        return res.sendStatus(400)
    }

    // Проверка, не пытается ли moderator удалить пользователя с ролью "admin" или "moderator" (модератору можно удалять только "группы")
    if (req.user.userrole != "admin" && selectedResult.data.userrole != "group") {
        return res.sendStatus(403)
    }

    // Удаление выбранного пользователя
    let deleteResult = await userModel.deleteUser(req.params.id)
    if (deleteResult.error) {
        return res.sendStatus(400)
    }
    if (deleteResult.data == 0) {
        return res.sendStatus(304)
    }

    res.sendStatus(200)
}