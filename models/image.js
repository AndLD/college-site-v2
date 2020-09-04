const mysql = require("../db/mysql")
const btoa = require("btoa")

/* SQL Table:

id
image

*/

exports.insertImage = (image) => {
    return new Promise((resolve) => {
        var query = mysql.connection.query("INSERT INTO images (mimetype, img) VALUES (?, ?)",
        [image.mimetype, btoa(image.image)], (error) => {
            if (error) {
                console.log("MySQL query (INSERT INTO images (mimetype, img) VALUES ('" + image.mimetype + "', '...')) finished with error: " + error.code)

                resolve({ error: true, data: null })
            } else {
                console.log("MySQL query (INSERT INTO images (mimetype, img) VALUES ('" + image.mimetype + "', '...')) successfully done.")

                var query = mysql.connection.query("SELECT LAST_INSERT_ID()", (error, row) => {
                    if (error) {
                        console.log("MySQL query (" + query.sql + ") finished with error: " + error.code)

                        resolve({ error: true, data: null })
                    } else {
                        console.log("MySQL query (" + query.sql + ") successfully done.")

                        resolve({ error: false, data: row })
                    }
                })
            }
        })
    })
}

exports.selectImages = (whereString = null, ids = null) => {
    return new Promise((resolve) => {
        var query = mysql.connection.query("SELECT * FROM images " + (whereString != null && ids != null ? whereString + " ORDER BY FIELD(id, " + ids + ")" : ""), (error, rows) => {
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

exports.deleteImage = (id) => {
    return new Promise((resolve) => {
        let query = mysql.connection.query("DELETE FROM images WHERE id = '" + id + "'", (error) => {
            if (error) {
                console.log("MySQL query (" + query.sql + ") finished with error: " + error.code)

                resolve(true)
            } else {
                console.log("MySQL query (" + query.sql + ") successfully done.")

                resolve(false)
            }
        })
    })
}

exports.updateImg = (image) => {
    return new Promise((resolve) => {
        let query = mysql.connection.query("UPDATE images SET img = ?, mimetype = ? WHERE id = ?", 
        [btoa(image.image), image.mimetype, image.id], (error, result) => {
            if (error) {
                console.log("MySQL query (" + "UPDATE images SET img = '...', mimetype = '" + image.mimetype + "' WHERE id = '" + image.id + "') finished with error: " + error.code)

                resolve({ error: false, data: null})
            } else {
                console.log("MySQL query (" + "UPDATE images SET img = '...', mimetype = '" + image.mimetype + "' WHERE id = '" + image.id + "') successfully done.")

                resolve({ error: false, data: result.affectedRows})
            }
        })
    })
}