require(["/resources/scripts/profile/modal.js"])

// HTML код для формы добавления новости
const postNewsFormHTML =
`
<div class="modal-title">Додавання новини</div>
<form>
    <label>
        <p>Title</p>
        <input type="text" name="title">
    </label>
    <label>
        <p>AddDate</p>
        <input type="date" name="addDate">
    </label>
    <label class="file">
        <p>Choose file *.html / *.docx</p>
        <input type="file" name="docx">
    </label>
    <div class="submit">Add</div>
</form>
`

// HTML код для формы редактирования новости
const putNewsFormHTML =
`
<div class="modal-title">Редагування новини</div>
<form>
    <label>
        <p>Id</p>
        <input type="text" name="id">
    </label>    
    <label>
        <p>Title</p>
        <input type="text" name="title">
    </label>
    <label>
        <p>AddDate</p>
        <input type="date" name="addDate">
    </label>
    <label>
        <p>Редагування тексту новини</p>
        <input type="checkbox" name="updateFile">
    </label>
    <label class="file hidden">
        <p>Choose file *.html / *.docx</p>
        <input type="file" name="docx">
    </label>
    <div class="submit">Edit</div>
</form>
`

// HTML код для формы удаления новости
const deleteNewsFormHTML =
`
<div class="modal-title">Видалення новини</div>
<form>
    <label>
        <p>Id</p>
        <input type="text" name="id">
    </label>    
    <div class="submit">Delete</div>
</form>
`

// ! edit news
var addIcon = document.querySelector("img[alt='add-news']")

var downloadForms = document.querySelectorAll(".download-news")
var editIcons = document.querySelectorAll("img[alt='edit-news']")
var deleteIcons = document.querySelectorAll("img[alt='delete-news']")

addIcon.onclick = () => { showAddNewsModalForm() }

for(var i = 0; i < downloadForms.length; i++) {
    downloadForms[i].onsubmit = () => { downloadNewsFormSetAction() }
    editIcons[i].onclick = () => { showEditNewsModalForm() }
    deleteIcons[i].onclick = () => { showDeleteNewsModalForm() }
}

// Показать форму для добавления новости
function showAddNewsModalForm() {
    // Заполняем модалку содержимым соответствующей константы с HTML кодом
    modalWrapper.firstElementChild.lastElementChild.innerHTML = postNewsFormHTML

    // Указываем текущую дату
    document.querySelector("input[name='addDate']").value = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString().split("T")[0]

    // Выводим название выбранного файла
    document.querySelector("input[name='docx']").onchange = () => {
        document.querySelector("label.file p").textContent = event.target.files[0].name
    }

    showModal()
    document.querySelector("div.submit").onclick = () => { postNewsRequest() }
}

// Показать форму для редактирования новости
function showEditNewsModalForm() {
    // Заполняем модалку содержимым соответствующей константы с HTML кодом
    modalWrapper.firstElementChild.lastElementChild.innerHTML = putNewsFormHTML

    // Чекбокс "Редактировать текст новости"
    document.querySelector("input[name='updateFile']").onchange = () => {
        // Если активен, то кнопка для выбора файла видна, иначе скрыта
        if (event.target.checked) {
            document.querySelector("label.file").classList.remove("hidden")
        } else {
            document.querySelector("label.file").classList.add("hidden")
        }
    }

    // Выводим название выбранного файла
    document.querySelector("input[name='docx']").onchange = () => {
        document.querySelector("label.file p").textContent = event.target.files[0].name
    }

    var addDate = new Date(event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].textContent)
    addDate = addDate.getFullYear() + "-" + 
    (addDate.getMonth() + 1 < 10 ? "0" + (addDate.getMonth() + 1) : addDate.getMonth() + 1) + "-" + 
    (addDate.getDate() < 10 ? "0" + (addDate.getDate()) : addDate.getDate())

    // Собираем необходимые данные из соседних элементов
    var news = {
        id: event.target.parentElement.parentElement.parentElement.parentElement.parentElement.lastElementChild.textContent,
        addDate: addDate,
        title: event.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.textContent
    }

    document.querySelector("input[name='id']").value = news.id
    document.querySelector("input[name='addDate']").value = news.addDate
    document.querySelector("input[name='title']").value = news.title

    showModal()
    document.querySelector("div.submit").onclick = () => { putNewsRequest() }
}

// Показать форму для удаления новости
function showDeleteNewsModalForm() {
    // Заполняем модалку содержимым соответствующей константы с HTML кодом
    modalWrapper.firstElementChild.lastElementChild.innerHTML = deleteNewsFormHTML

    // Собираем необходимые данные из соседних элементов
    var news = {
        id: event.target.parentElement.parentElement.parentElement.parentElement.parentElement.lastElementChild.textContent
    }

    document.querySelector("input[name='id']").value = news.id

    showModal()
    document.querySelector("div.submit").onclick = () => { deleteNewsRequest() }
}

// Запрос на добавление новости
function postNewsRequest() {
    var request = new XMLHttpRequest()

    var form = new FormData()
    form.append("title", document.querySelector("input[name='title']").value)
    form.append("addDate", document.querySelector("input[name='addDate']").value)
    form.append("docx", document.querySelector("input[name='docx']").files[0])

    request.open(
        "POST",
        HOST + "/news",
        false
    )

    request.onerror = () => {
        alert("Request error.")
    }

    request.onload = () => {
        if (request.status == 400) {
            alert(request.response)
        }
        window.location.reload()
    }

    request.send(form)
}

// Запрос на редактирование новости
function putNewsRequest() {
    var request = new XMLHttpRequest()

    var form = new FormData()
    form.append("title", document.querySelector("input[name='title']").value)
    form.append("addDate", document.querySelector("input[name='addDate']").value)
    form.append("updateFile", document.querySelector("input[name='updateFile']").checked)
    form.append("docx", document.querySelector("input[name='docx']").files[0])

    request.open(
        "PUT",
        HOST + "/news/" + document.querySelector("input[name='id']").value,
        false
    )

    request.onerror = () => {
        alert("Request error.")
    }

    request.onload = () => {
        if (request.status == 400) {
            alert(request.response)
        }
        window.location.reload()
    }

    request.send(form)
}

// Запрос на удаление новости
function deleteNewsRequest() {
    var request = new XMLHttpRequest()

    request.open(
        "DELETE",
        HOST + "/news/" + document.querySelector("input[name='id']").value,
        false
    )

    request.onerror = () => {
        alert("Request error.")
    }

    request.onload = () => {
        if (request.status == 400) {
            alert(request.response)
        }
        window.location.reload()
    }

    request.send()
}

// ...Запрос на скачивание реализован через форму...

// Заполняем action перед отправкой формы на скачивание новости
function downloadNewsFormSetAction() {
    event.target.setAttribute("action", "/news/" + 
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.lastElementChild.textContent)
}