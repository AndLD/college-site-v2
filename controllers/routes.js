// Подключаем библиотеку для чтения .env файла
require('dotenv').config()

const express = require('express');
const server = express();
const articleModel = require("c:/Users/Андрей/Documents/GitHub/college-site-v2/models/article");


// Подключение к базе данных 
const mysql = require('c:/Users/Андрей/Documents/GitHub/college-site-v2/db/mysql');
mysql.connect('mysql://localhost/mydb', { useNewUrlParser: true });

// Модель статьи
const articles = await articleModel.find({ title: { $regex: searchTerm, $options: 'i' } });

// Роут для поиска статей
server.get('/search', async (req, res) => {
    const query = req.query.query; // Получаем строку поиска из запроса
    try {
        // Ищем статьи, в названии которых есть введенная строка
        const articles = await Article.find({ title: { $regex: query, $options: 'i' } });
        res.json(articles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// Запускаем сервер
const PORT = process.env.PORT
server.listen(PORT, () => {
    console.log('Server started at ' + PORT + ' port...')
})