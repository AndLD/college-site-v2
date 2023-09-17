const express = require('express');
const router = express.Router();
const articleModel = require("c:/Users/Андрей/Documents/GitHub/college-site-v2/models/article");

// Роут для поиска статей по названию
router.get('/search', async (req, res) => {
    try {
        const searchTerm = req.query.q; // Получаем строку поиска из запроса
        if (!searchTerm) {
            return res.status(400).json({ error: 'Введіть пошуковий запит' });
        }

        // Выполните поиск статей в базе данных по подстроке в названии
        const articles = await articleModel.find({ title: { $regex: searchTerm, $options: 'i' } });

        res.json({ results: articles });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Сталася помилка під час пошуку' });
    }
});

module.exports = router;

