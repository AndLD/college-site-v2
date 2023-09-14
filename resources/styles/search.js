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

function displaySearchResults(results) {
    searchResults.innerHTML = `Результаты поиска по ключевым словам: ${results}`;
    searchResults.classList.remove('hidden'); // Показываем результаты
    searchInput.value = '';
}
