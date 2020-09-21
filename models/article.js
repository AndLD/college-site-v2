const mysql = require("../db/mysql")

exports.insertArticle = (article) => {
    return new Promise((resolve) => {
        var query = mysql.connection.query("INSERT INTO articles (title, html, docx, fileFormat, viewMode) VALUES (?, ?, ?, ?, ?)",
        [article.title, article.html, article.docx, article.fileFormat, article.viewMode], (error) => {
            if (error) {
                console.log("MySQL query (INSERT INTO articles (title, html, docx, fileFormat, viewMode) VALUES ('" + 
                article.title + "', '...', '...', '" + article.fileFormat + "', '" + article.viewMode + "')) finished with error: " + error.code)

                resolve(true)
            } else {
                console.log("MySQL query (INSERT INTO articles (title, html, docx, fileFormat, viewMode) VALUES ('" + 
                article.title + "', '...', '...', '" + article.fileFormat + "', '" + article.viewMode + "')) successfully done.")

                resolve(false)
            }
        })
    })
}

exports.selectArticles = () => {
    return new Promise((resolve) => {
        var query = mysql.connection.query("SELECT * FROM articles", (error, rows) => {
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

exports.selectArticleById = (id) => {
    return new Promise((resolve) => {
        var query = mysql.connection.query("SELECT * FROM articles WHERE id = " + id, (error, rows) => {
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

exports.updateArticle = (article) => {
    return new Promise((resolve) => {
        var values = "title = '" + article.title + "', " +
        (article.html == null ? "" : "html = '" + article.html + "', ") + 
        (article.docx == null ? "" : "docx = ?") +
        (article.fileFormat == null ? " " : ", fileFormat = '" + article.fileFormat + "'") +
        (article.viewMode == null ? "" : ", viewMode = '" + article.viewMode + "'")
        var query = mysql.connection.query("UPDATE articles SET " + values + " WHERE id = " + article.id, [article.docx], (error, result) => {
            if (error) {
                console.log(
                    "MySQL query (UPDATE articles SET title = '" + article.title + 
                    "', html = '...', docx = '...', fileFormat = '..." +
                    "', viewMode = '" + article.viewMode + "' WHERE id = " + article.id + ") finished with error: " + error.code
                )
                console.log(query.sql.substr(0, 200))
                console.log(query.sql.substr(query.sql.length - 200, query.sql.length - 1))
                resolve({ error: true, data: 0 })
            } else {
                console.log(
                    "MySQL query (UPDATE articles SET title = '" + article.title + 
                    "', html = '...', docx = '...', fileFormat = '..." +
                    "', viewMode = '" + article.viewMode + "' WHERE id = " + article.id + ")  successfully done."
                )

                resolve({ error: false, data: result.affectedRows })
            }
        })
    })
}

exports.deleteArticle = (id) => {
    return new Promise((resolve) => {
        var query = mysql.connection.query("DELETE FROM articles WHERE id = " + id, (error, result) => {
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