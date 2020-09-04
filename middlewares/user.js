const constants = require("../helpers/constants").common
const userModels = require("../models/user")

exports.isLogged = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect("/login")
}

exports.isNotLogged = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next()
    }
    res.redirect("/login-otp")
}

exports.is2FALogged = (req, res, next) => {
    if (req.user.twoFactor && !req.session.twoFactor) {
        return res.redirect("/login-otp")
    }
    console.log("2FA is logged.")
    return next()
}

exports.is2FANotLogged = (req, res, next) => {
    if (req.user.twoFactor && !req.session.twoFactor) {
        return next()
    }
    return res.redirect("/profile")
}

// Сравнение ip клиента с массивом разрешенных адресов
exports.ipGuard = async (req, res, next) => {
    if (constants.ALLOWED_HOSTS.length == 0 || constants.ALLOWED_HOSTS[0] == '') {
        return next()
    }

    if (req.body.username) {
        // Получаем пользователя. Если его роль - группа, то проверка ip пропускается
        let selectedResult = await userModels.selectUserByName(req.body.username)
        if (selectedResult.error == true) {
            return res.send(400)
        }

        if (selectedResult.data != undefined && selectedResult.data.userrole == "group") {
            return next()
        }
    }

    var ip = req.ipInfo.ip
    console.log("IP: " + ip + " (" + new Date(Date.now()) + ")")

    if (ip == "::1" || ip == "::ffff:127.0.0.1") {
        return next()
    }

    for(var i = 0; i < constants.ALLOWED_HOSTS.length; i++) {
        if (ip == constants.ALLOWED_HOSTS[i] || ip == "::ffff:" + constants.ALLOWED_HOSTS[i]) {
            return next()
        }
    }

    return res.sendStatus(403)
}

exports.isAdmin = (req, res, next) => {
    if (req.user.userrole == "admin") {
        return next()
    }

    res.sendStatus(403)
}

exports.isModerator = (req, res, next) => {
    if (req.user.userrole == "admin" || req.user.userrole == "moderator") {
        return next()
    }

    res.sendStatus(403)
}