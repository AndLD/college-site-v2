const mysql = require("../db/mysql")

exports.insertArticle = (article) => {
    return new Promise((resolve) => {
        var query = mysql.connection.query("INSERT INTO articles (title, html, docx) VALUES (?, ?, ?)",
        [article.title, article.html, article.docx], (error) => {
            if (error) {
                console.log("MySQL query (INSERT INTO articles (title, html, docx) VALUES ('" + 
                article.title + "', '...', '...')) finished with error: " + error.code)

                resolve(true)
            } else {
                console.log("MySQL query (INSERT INTO articles (title, html, docx) VALUES ('" + 
                article.title + "', '...', '...')) successfully done.")

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
        var values = "title = '" + article.title + "'" +
        (article.html == null ? "" : ", html = '" + article.html + "', ") + 
        (article.docx == null ? "" : "docx = ?")

        var query = mysql.connection.query("UPDATE articles SET " + values + " WHERE id = " + article.id, [article.docx], (error, result) => {
            if (error) {
                console.log(
                    "MySQL query (UPDATE articles SET title = '" + article.title + 
                    "', html = '...', docx = '...' WHERE id = " + article.id + ") finished with error: " + error.code
                )

                resolve({ error: true, data: 0 })
            } else {
                console.log("MySQL query (UPDATE articles SET title = '" + article.title + 
                "', html = '...', docx = '...' WHERE id = " + article.id + ") successfully done.")

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