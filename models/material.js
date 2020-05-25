const mysql = require("../db/mysql")

exports.insertMaterial = (subject) => {

}

exports.selectMaterials = () => {
    return new Promise((resolve) => {
        var query = mysql.connection.query("SELECT * FROM materials", (error, rows) => {
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

exports.selectMaterialById = (id) => {
    
}

exports.updateMaterial = (subject) => {

}

exports.deleteMaterial = (id) => {
    
}