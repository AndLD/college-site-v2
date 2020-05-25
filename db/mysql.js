const mysql = require("mysql")

connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

exports.connection = connection

exports.init = () => {
    connection.connect((error) => {
        if (error != null) {
            console.log("MySQL connection error:")
            console.log(error.code)
        } else {
            console.log("MySQL successfully connected.")
        }
    })
}