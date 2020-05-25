const constants = require("../helpers/constants").common

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
    return next()
}

exports.is2FANotLogged = (req, res, next) => {
    if (req.user.twoFactor && !req.session.twoFactor) {
        return next()
    }
    return res.redirect("/profile")
}

// Сравнение ip клиента с массивом разрешенных адрессов
exports.ipGuard = (req, res, next) => {
    var ip = req.ipInfo.ip
    console.log("IP: " + ip + " (" + new Date(Date.now()) + ")")

    for(var i = 0; i < constants.ALLOWED_HOSTS.length; i++) {
        if (ip == constants.ALLOWED_HOSTS[i] || ip == "::1" || ip == "::ffff:127.0.0.1") {
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