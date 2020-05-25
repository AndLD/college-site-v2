const mysql = require("../db/mysql")

// Метод добавления элемента меню
exports.insertMenu = function (menu) {
    return new Promise(function(resolve, reject) {
        var values = "'" + menu.title + "', '" + menu.link + "'" + (menu.parentId != "" ? ", " + menu.parentId: ", null") + ", " + menu.position + ", " + menu.footer
        var query = mysql.connection.query("INSERT INTO menu (title, link, parentId, position, footer) VALUES ( " + values + " )", (error) => {
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

// Метод получения меню
exports.selectMenu = function () {
    return new Promise(function(resolve, reject) {
        var query = mysql.connection.query("SELECT * FROM menu ORDER BY parentId, position", (error, rows) => {
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

// Метод изменения элемента меню
exports.updateMenu = function (menu) {
    return new Promise(function (resolve, reject) {
        mysql.connection.beginTransaction((error) => {
            if (error) resolve(true)

            // Запрос на изменение позиции элементов, имеющих такого же родителя, как и выбранный элемент
            var updatePositionsQuery = mysql.connection.query(
                "UPDATE menu SET position = position " + 
                (menu.position < menu.oldPosition ? "+" : "-") + 
                " 1 WHERE parentId " + 
                (menu.parentId == "null" ? "is ": "= ") + menu.parentId + 
                (menu.position < menu.oldPosition ? 
                    " AND position >= " + menu.position + " AND position < " + menu.oldPosition : 
                    " AND position <= " + menu.position + " AND position > " + menu.oldPosition
            ), (error) => {
                if (error) {
                    console.log("MySQL query (" + updatePositionsQuery.sql + ") finished with error: " + error.code)

                    mysql.connection.rollback()

                    resolve(true)
                } else {
                    console.log("MySQL query (" + updatePositionsQuery.sql + ") successfully done.")

                    // Запрос на изменение выбранного элемента
                    var values = "title = '" + menu.title + 
                    "', link = '" + menu.link + "'" + 
                    // TODO: убрать тернарный оператор, так как больше не бывает parentId с пустым значением
                    (menu.parentId != "" ? ", parentId = " + menu.parentId: "") + 
                    ", position = " + menu.position + ", footer = " + menu.footer
                    var query = mysql.connection.query("UPDATE menu SET " + values + " WHERE id = " + menu.id, (error) => {
                        if (error) {
                            console.log("MySQL query (" + query.sql + ") finished with error: " + error.code)

                            mysql.connection.rollback()
                        
                            resolve(true)
                        } else {
                            console.log("MySQL query (" + query.sql + ") successfully done.")

                            mysql.connection.commit()
                        
                            resolve(false)
                        }
                    })
                }
            })
            
        })

    })
}

// Метод удаления элемента меню
exports.deleteMenu = function (menu) {
    return new Promise(function (resolve, reject) {
        mysql.connection.beginTransaction((error) => {
            if (error) resolve(true)

            // Запрос на получение id всех элементов меню, родителем которых является удаляемый элемент меню
            var selectQuery = mysql.connection.query("SELECT id FROM menu WHERE parentId = " + menu.id, (error, rows) => {
                if (error != null) {
                    console.log("MySQL query (" + selectQuery.sql + ") finished with error: " + error.code)

                    mysql.connection.rollback()

                    resolve(true)
                } else {
                    console.log("MySQL query (" + selectQuery.sql + ") successfully done.")

                    // Собираем id, полученнные в SELECT запросе в одну строку
                    var selectResult = ""
                    if (rows.length > 0) {
                        selectResult = " OR parentId IN ("
                        for (var i = 0; i < rows.length; i++) {
                            selectResult += rows[i].id + (i == rows.length - 1 ? ")": ",")
                        }
                    }

                    // Запрос на удаление выбранного пользователем элемента меню и всех его дочерних элементов
                    var deleteQuery = mysql.connection.query("DELETE FROM menu WHERE id = " + menu.id + " OR parentId = " + menu.id + selectResult, (deleteError) => {
                        if (deleteError != null) {
                            console.log("MySQL query (" + deleteQuery.sql + ") finished with error: " + deleteError.code)

                            mysql.connection.rollback()

                            resolve(true)
                        } else {
                            console.log("MySQL query (" + deleteQuery.sql + ") successfully done.")
                        
                            // Запрос на обновление позиций соседних элементов (братьев), чьи позиции больше позиции удаляемого элемента
                            var updateGreaterPositionQuery = mysql.connection.query(
                                "UPDATE menu SET position = position - 1 " +
                                "WHERE parentId " + (menu.parentId == "null" ? "is ": "= ") + menu.parentId + " AND position > " + menu.oldPosition, (error) => {
                                    if (error != null) {
                                        console.log("MySQL query (" + updateGreaterPositionQuery.sql + ") finished with error: " + error.code)
                                    
                                        mysql.connection.rollback()

                                        resolve(true)
                                    } else {
                                        console.log("MySQL query (" + updateGreaterPositionQuery.sql + ") successfully done.")

                                        mysql.connection.commit()
                                    
                                        resolve(false)
                                    }
                                }
                            )
                        }
                    })
                }
            })

        })

    })    
}