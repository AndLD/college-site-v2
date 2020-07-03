const mysql = require("../db/mysql")

/* SQL Table:

sliderId
id
position
imageId

*/

exports.insertSliderImg = (sliderImg) => {
    return new Promise((resolve) => {
        var query = mysql.connection.query("INSERT INTO sliderImgs (sliderId, position, imageId) VALUES (?, ?, ?)",
        [sliderImg.sliderId, sliderImg.position, sliderImg.imageId], (error) => {
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

exports.selectSliderImgs = () => {
    return new Promise((resolve) => {
        var query = mysql.connection.query("SELECT * FROM sliderImgs ORDER BY position", (error, rows) => {
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