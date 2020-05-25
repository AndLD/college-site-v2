const mysql = require("../db/mysql")

exports.insertSubject = (subject) => {

}

exports.selectSubjects = () => {
    return new Promise((resolve) => {
        var query = mysql.connection.query("SELECT * FROM subjects", (error, rows) => {
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

exports.updateSubject = (subject) => {

}

exports.deleteSubject = (id) => {

}