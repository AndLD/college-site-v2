const mysql = require("../db/mysql")

// exports.user = {

// }

exports.insertUser = (user) => {
    return new Promise((resolve) => {
        var values = "'" + 
            user.username + "', '" + 
            user.pass + "', '" + 
            user.userrole + "', " +
            user.twoFactor + ", " +
            user.telegramId + ", " +
            user.twoFactorCode + ", '" +
            user.telegramSecret + "'"

        var query = mysql.connection.query(
            "INSERT INTO users (username, pass, userrole, twoFactor, telegramId, twoFactorCode, telegramSecret) VALUES (" + values + ")", (error) => {
                if (error) {
                    console.log("MySQL query (user inserting) finished with error: " + error.code)

                    resolve(true)
                } else {
                    console.log("MySQL query (" + query.sql + ") successfully done.")

                    resolve(false)
                }
            }
        )
    })
}

exports.selectUsers = (userrole) => {
    return new Promise((resolve) => {
        var query = mysql.connection.query("SELECT * FROM users" + (userrole != null ? " WHERE userrole = '" + userrole + "'" : ""), (error, rows) => {
            if (error) {
                console.log("MySQL query (" + query.sql + ") finished with error: " + error.code)

                resolve({ error: true, data: null })
            } else {
                console.log("MySQL query (" + query.sql + ") successfully done.")

                resolve({ error: false, data: rows })
            }
        })
    })
}

exports.selectUserByName = (username) => {
    return new Promise((resolve) => {
        var query = mysql.connection.query("SELECT * FROM users WHERE username = '" + username + "'", (error, rows) => {
            if (error) {
                console.log("MySQL query (" + query.sql + ") finished with error: " + error.code)

                resolve({ error: true, data: null })
            } else {
                console.log("MySQL query (" + query.sql + ") successfully done.")

                resolve({ error: false, data: rows[0] })
            }
        })
    })
}

exports.selectUserById = (id) => {
    return new Promise((resolve) => {
        var query = mysql.connection.query("SELECT * FROM users WHERE id = '" + id + "'", (error, rows) => {
            if (error) {
                console.log("MySQL query (" + query.sql + ") finished with error: " + error.code)

                resolve({ error: true, data: null })
            } else {
                console.log("MySQL query (" + query.sql + ") successfully done.")

                resolve({ error: false, data: rows[0] })
            }
        })
    })
}

// Для телеграмм-бота

exports.enableTwoFactor = (telegramId, telegramSecret) => {
    return new Promise((resolve) => {
        var query = mysql.connection.query(
            "UPDATE users SET twoFactor = true, telegramId = '" + telegramId + "' " +
            "WHERE twoFactor = false AND telegramSecret = '" + telegramSecret + "'", (error, result) => {
                if (error) {
                    console.log("MySQL query (" + query.sql + ") finished with error: " + error.code)

                    resolve({ error: true, data: 0 })
                } else {
                    console.log("MySQL query (" + query.sql + ") successfully done.")

                    resolve({ error: false, data: result.affectedRows })
                }
            }
        )
    })
}

exports.disableTwoFactor = (telegramSecret) => {
    return new Promise((resolve) => {
        var query = mysql.connection.query(
            "UPDATE users SET twoFactor = false, telegramId = null " +
            "WHERE twoFactor = true AND telegramSecret = '" + telegramSecret + "'", (error, result) => {
                if (error) {
                    console.log("MySQL query (" + query.sql + ") finished with error: " + error.code)

                    resolve({ error: true, data: 0 })
                } else {
                    console.log("MySQL query (" + query.sql + ") successfully done.")

                    resolve({ error: false, data: result.affectedRows })
                }
            }
        )
    })
}

exports.saveTwoFactorCode = (id, telegramId, twoFactorCode) => {
    return new Promise((resolve) => {
        var query = mysql.connection.query(
            "UPDATE users SET twoFactorCode = '" + twoFactorCode + "' " +
            "WHERE id = " + id + " AND telegramId = '" + telegramId + "'", (error) => {
                if (error) {
                    console.log("MySQL query (" + query.sql + ") finished with error: " + error.code)

                    resolve(true)
                } else {
                    console.log("MySQL query (" + query.sql + ") successfully done.")

                    resolve(false)
                }
            }
        )
    })
}

// Изменение пользователя (логин / роль)
exports.updateUser = (user) => {
    return new Promise((resolve) => {
        var query = mysql.connection.query("UPDATE users SET username = '" + user.username + "', userrole = '" + user.userrole + "' WHERE id = " + user.id, (error, result) => {
            if (error) {
                console.log("MySQL query (" + query.sql + ") finished with error: " + error.code)

                resolve({ error: true, data: 0 })
            } else {
                console.log("MySQL query (" + query.sql + ") successfully done.")

                resolve({ error: false, data: result.affectedRows })
            }
        })
    })
}

// Удаление пользователя
exports.deleteUser = (id) => {
    return new Promise((resolve) => {
        let query = mysql.connection.query("DELETE FROM users WHERE id = " + id, (error, result) => {
            if (error) {
                console.log("MySQL query (" + query.sql + ") finished with error: " + error.code)

                resolve({ error: true, data: 0 })
            } else {
                console.log("MySQL query (" + query.sql + ") successfully done.")

                resolve({ error: false, data: result.affectedRows })
            }
        })
    })
}