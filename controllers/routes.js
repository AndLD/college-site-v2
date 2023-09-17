// Подключаем библиотеку для чтения .env файла
require('dotenv').config()

const express = require('express');
const server = express();
const articleModel = require("c:/Users/Андрей/Documents/GitHub/college-site-v2/models/article");


// Подключение к базе данных 
const mysql = require('c:/Users/Андрей/Documents/GitHub/college-site-v2/db/mysql');

connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

connection.connect((error) => {
        if (error != null) {
            console.log('MySQL connection error:')
            console.log(error.code)
        } else {
            console.log('MySQL successfully connected.')
        }
    })

// Роут для поиска статей
// Роут для выполнения поиска по названиям статей
server.get('/search', (req, res) => {
    const searchString = req.query.q; // Получаем строку поиска из запроса
  
    // SQL-запрос для выполнения поиска
    const sqlQuery = `SELECT * FROM articles WHERE title LIKE '%${searchString}%'`;
  
    // Выполняем SQL-запрос к базе данных
    connection.query(sqlQuery, (err, results) => {
      if (err) {
        console.error('Ошибка выполнения SQL-запроса:', err);
        res.status(500).json({ error: 'Произошла ошибка на сервере' });
      } else {
        // Отправляем результаты поиска в формате JSON
        res.json(results);
      }
    });
  });

// Запускаем сервер
const PORT = process.env.PORT
server.listen(PORT, () => {
    console.log('Server started at ' + PORT + ' port...')
})