const toggleSearchButton = document.getElementById('toggleSearchButton');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');
const searchString = searchInput.value;

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
    const searchString = searchInput.value;
    if (searchString) {
        fetch(`/search?q=${encodeURIComponent(searchString)}`)
            .then(response => response.json())
            .then(data => {
                // Обработка полученных результатов и отображение их на странице
                const resultsHTML = data.map(article => {
                    return `<a href="/articles/${article._id}">${article.title}</a>`;
                }).join('<br>');
                searchResultsContainer.innerHTML = resultsHTML;
            })
            .catch(error => console.error(error));
    }

    // Очищаем строку поиска
    searchInput.value = '';
};


let timeoutId; // Переменная для хранения идентификатора таймера

// Функция для выполнения поиска с задержкой
function debounceSearch() {
    clearTimeout(timeoutId); // Очистить предыдущий таймер (если есть)
    
    // Установить новый таймер
    timeoutId = setTimeout(() => {
        performSearch(); // Выполнить поиск
    }, 2000);
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
