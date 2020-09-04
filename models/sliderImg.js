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

exports.selectSliderImgByImageId = (imageId) => {
    return new Promise((resolve) => {
        let query = mysql.connection.query("SELECT * FROM sliderImgs WHERE imageId = '" + imageId + "'", (error, rows) => {
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

exports.updateSliderImg = (sliderImg) => {
    return new Promise((resolve) => {
        mysql.connection.beginTransaction((error) => {
            if (error) resolve(true)
            
            // Запрос на обновление позиций всех остальных
            let updatePositionsQuery = mysql.connection.query(
                "UPDATE sliderImgs SET position = position " +
                (sliderImg.position < sliderImg.oldPosition ? "+" : "-") + 
                " 1 WHERE sliderId = '" + sliderImg.sliderId + "'" + 
                (sliderImg.position < sliderImg.oldPosition ? 
                    " AND position >= " + sliderImg.position + " AND position < " + sliderImg.oldPosition : 
                    " AND position <= " + sliderImg.position + " AND position > " + sliderImg.oldPosition
                ), (error) => {
                    if (error) {
                        console.log("MySQL query (" + updatePositionsQuery.sql + ") finished with error: " + error.code)
                        
                        mysql.connection.rollback()

                        resolve(true)
                    } else {
                        console.log("MySQL query (" + updatePositionsQuery.sql + ") successfully done.")

                        let updateSliderImgQuery = mysql.connection.query(
                            "UPDATE sliderImgs SET position = " + sliderImg.position + " WHERE imageId = '" + sliderImg.imageId + "'", (error) => {
                                if (error) {
                                    console.log("MySQL query (" + updateSliderImgQuery.sql + ") finished with error: " + error.code)

                                    mysql.connection.rollback()

                                    resolve(true)
                                } else {
                                    console.log("MySQL query (" + updateSliderImgQuery.sql + ") successfully done.")

                                    mysql.connection.commit()

                                    resolve(false)
                                }
                            }
                        )
                    }
                }
            )
        })
    })
}

exports.deleteSliderImg = (sliderImg) => {
    return new Promise((resolve) => {
        mysql.connection.beginTransaction((error) => {
            if (error) resolve(true)

            let deleteSliderImgsQuery = mysql.connection.query("DELETE FROM sliderImgs WHERE id = '" + sliderImg.id + "'", (error) => {
                if (error) {
                    console.log("MySQL query (" + deleteSliderImgsQuery.sql + ") finished with error: " + error.code)
    
                    mysql.connection.rollback()

                    resolve(true)
                } else {
                    console.log("MySQL query (" + deleteSliderImgsQuery.sql + ") successfully done.")
    
                    let updatePositionsQuery = mysql.connection.query("UPDATE sliderImgs SET position = position - 1 WHERE sliderId = " +
                    sliderImg.sliderId + " AND position > " + sliderImg.position, (error) => {
                        if (error) {
                            console.log("MySQL query (" + updatePositionsQuery.sql + ") finished with error: " + error.code)
            
                            mysql.connection.rollback()

                            resolve(true)
                        } else {
                            console.log("MySQL query (" + updatePositionsQuery.sql + ") successfully done.")
            
                            mysql.connection.commit()

                            resolve(false)
                        }
                    })
                }
            })

        })
    })
}