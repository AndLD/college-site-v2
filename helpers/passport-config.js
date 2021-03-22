const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const CustomStrategy = require("passport-custom").Strategy

const userModels = require("../models/user")
const bcrypt = require("bcrypt")

// Запускаем телеграмм-бота
require("./telegramBot")

function init() {
    passport.use(new LocalStrategy({
        usernameField: "username",
        passwordField: "password"
    }, async (username, password, done) => {
        const selectedResult = await userModels.selectUserByName(username)
        if (selectedResult.error) {
            return done(null, false, { message: "Internal error."})
        }

        const user = selectedResult.data

        if (user == null) {
            return done(null, false, { message: "User with that login does not exist." })
        }

        if (user.userrole == "group" ? password != fixPassword(user.pass.toString()) : ! await bcrypt.compare(password, user.pass.toString())) {
            return done(null, false, { message: "Incorrect password."})
        }

        return done(null, user)
    }))

    passport.use(new CustomStrategy(async (req, done) => {
        var code = req.body.code

        var selectedResult = await userModels.selectUserById(req.user.id)
        if (selectedResult.error) {
            return done(null, false, { message: "Internal error." })
        }
        
        var user = selectedResult.data

        if (code != user.twoFactorCode) {
            return done(null, false, { message: "Incorrect code."})
        }

        return done(null, user)
    }))

    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser(async (id, done) => {
        const selectedResult = await userModels.selectUserById(id)
        console.log("de-serialize user");
        if (selectedResult.error) {
            done(null, false, { messages: "Internal error." })
        }
        done(null, selectedResult.data)
    })
}

exports.passport = passport
exports.init = init

function fixPassword(pass) {
    for(let i = 0; i < pass.length; i++) {
        if (pass.charCodeAt(i) == 0) {
            pass = pass.substring(0, i)
        }
    }
    return pass
}