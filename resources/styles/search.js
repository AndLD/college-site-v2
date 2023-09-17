const toggleSearchButton = document.getElementById('toggleSearchButton');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

toggleSearchButton.addEventListener('click', () => {
    searchContainer.classList.toggle('hidden');
    searchResults.classList.add('hidden'); // Скрываем результаты при открытии поиска
});

searchInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        performSearch();
    }
});

// Функция для выполнения поискового запроса на бэкенд
async function performSearch() {
    const query = searchInput.value.trim();
    if (query === '') {
        searchResults.innerHTML = ''; // Очистите результаты, если строка поиска пуста
        return;
    }

    try {
        const response = await fetch(`/search?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error('Помилка виконання пошуку');
        }

        const data = await response.json();
        const articles = data.results;

        // Отображение результатов в виде ссылок
        const resultsHTML = articles.map((article) => {
            return `<a href="/articles/${article._id}">${article.title}</a>`;
        }).join('');

        searchResults.innerHTML = resultsHTML;
    } catch (error) {
        console.error(error);
        searchResults.innerHTML = 'Сталася помилка під час пошуку';
    }

    // Очищаем строку поиска
    searchInput.value = '';
}

// Обработчики событий для кнопки и поля ввода поиска
searchButton.addEventListener('click', performSearch);

searchInput.addEventListener('input', performSearch);

// Обработчик события для поля ввода поиска при нажатии Enter
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});
