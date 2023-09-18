let timeoutId // Переменная для хранения идентификатора таймера

const toggleSearchButton = document.getElementById("toggleSearchButton")
const searchWrapper = document.querySelector(".search-wrapper")
const searchContainer = document.getElementById("searchContainer")
const searchInput = document.getElementById("searchInput")
// const searchButton = document.getElementById("searchButton")
const searchResults = document.getElementById("searchResults")

toggleSearchButton.addEventListener("click", () => {
  searchWrapper.classList.toggle("hidden")
  searchInput.focus()
  searchResults.innerHTML = "" // Скрываем результаты при открытии поиска
})

// Функция для выполнения поискового запроса на бэкенд
async function performSearch() {
  const query = searchInput.value.trim()
  if (query === "") {
    searchResults.innerHTML = "" // Очистите результаты, если строка поиска пуста
    return
  }

  try {
    const response = await fetch(
      `/public/article?query=${encodeURIComponent(query)}`
    )
    if (!response.ok) {
      throw new Error(`Помилка виконання пошуку`)
    }

    const articles = await response.json()

    // Отображение результатов в виде ссылок
    const resultsHTML =
      articles.length > 0
        ? articles
            .map((article) => {
              return `<div class='search-results-item'><a href="/articles/${article.id}">${article.title}</a></div>`
            })
            .join("")
        : "<div>Немає результатів</div>"

    searchResults.innerHTML = resultsHTML
  } catch (error) {
    console.error(error)
    searchResults.innerHTML = "Сталася помилка під час пошуку"
  }
}

// Функция для выполнения поиска с задержкой
function debounceSearch() {
  clearTimeout(timeoutId) // Очистить предыдущий таймер (если есть)

  timeoutId = setTimeout(() => {
    performSearch() // Выполнить поиск
  }, 2000)
}

// Обработчики событий для кнопки и поля ввода поиска
// searchButton.addEventListener("click", debounceSearch)

searchInput.addEventListener("input", debounceSearch)

// Обработчик события для поля ввода поиска при нажатии Enter
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    debounceSearch()
  }
})
