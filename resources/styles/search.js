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

function performSearch() {
    const keywords = searchInput.value;
    displaySearchResults(keywords);
}

searchButton.addEventListener('click', () => {
    performSearch();
});

// Функция для выполнения поиска и открытия результатов в новой вкладке
function performSearch() {
    const query = searchInput.value.trim();
    if (query === '') {
        return; // Ничего не делаем, если строка поиска пуста
    }

    // Ваш код для выполнения фактического поиска и получения результатов
    // Замените следующую строку на код, который выполняет поиск
    const searchResults = ['Результат 1', 'Результат 2', 'Результат 3'];

    // Создаем HTML-содержимое для результатов
    let resultsHTML = '<ul>';
    for (const result of searchResults) {
        resultsHTML += `<li>${result}</li>`;
    }
    resultsHTML += '</ul>';

    // Открываем новую вкладку и отображаем результаты
    const searchResultsWindow = window.open('', '_blank');
    searchResultsWindow.document.body.innerHTML = resultsHTML;

     // Очищаем строку поиска
     searchInput.value = '';
}

// Обработчик события для кнопки поиска
searchButton.addEventListener('click', performSearch);

// Обработчик события для поля ввода поиска при нажатии Enter
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});
