require(["/resources/scripts/profile/modal.js"])

let updates = 0

// HTML код для формы добавления статьи
const postArticleFormHTML = 
`
<div class="modal-title">Додавання статті</div>
<form>
    <label>
        <p>Title</p>
        <input type="text" name="title">
    </label>
    <label class="file">
        <p>Choose file *.html / *.docx / *.pdf</p>
        <input type="file" name="docx">
    </label>
    <div>
        <p>ViewMode</p>
        <p><input type="radio" name="viewMode" value="html">html</p>
        <p><input type="radio" name="viewMode" value="docx_to_html">docx to html</p>
        <p><input type="radio" name="viewMode" value="pdf">pdf</p>
    </div>
    <div class="submit">Add</div>
</form>
`

// HTML код для формы изменения статьи
const putArticleFormHTML =
`
<div class="modal-title">Редагування статті</div>
<form>
    <label class="hidden">
        <p>Id</p>
        <input type="text" name="id">
    </label>
    <label>
        <p>Title</p>
        <input type="text" name="title">
    </label>
    <label>
        <p>Редагування тексту статті</p>
        <input type="checkbox" name="updateFile">
    </label>
    <label class="file hidden">
        <p>Choose file *.html / *.docx / *.pdf</p>
        <input type="file" name="docx">
    </label>
    <div>
        <p>ViewMode</p>
        <p><input type="radio" name="viewMode" value="html">html</p>
        <p><input type="radio" name="viewMode" value="docx_to_html">docx to html</p>
        <p><input type="radio" name="viewMode" value="pdf">pdf</p>
    </div>
    <div class="submit">Edit</div>
</form>
`

// HTML код для формы удаления статьи
const deleteArticleFormHTML =
`
<div class="modal-title">Видалення статті</div>
<form>
    <label class="hidden">
        <p>Id</p>
        <input type="text" name="id">
    </label>
    <div class="submit">Delete</div>
</form>
`

// ! edit article
var addIcon = document.querySelector("img[alt='add-article']")

var downloadForms = document.querySelectorAll(".download-article")
var editIcons = document.querySelectorAll("img[alt='edit-article']")
var deleteIcons = document.querySelectorAll("img[alt='delete-article']")

addIcon.onclick = () => { showAddArticleModalForm() }

for(var i = 0; i < downloadForms.length; i++) {
    downloadForms[i].onsubmit = () => { downloadArticleFormSetAction() }
    editIcons[i].onclick = () => { showEditArticleModalForm() }
    deleteIcons[i].onclick = () => { showDeleteArticleModalForm() }
}

// Показать форму для добавления статьи
function showAddArticleModalForm() {
    // Заполняем модалку содержимым соответствующей константы с HTML кодом
    modalWrapper.firstElementChild.lastElementChild.innerHTML = postArticleFormHTML

    // Выводим название выбранного файла
    document.querySelector("input[name='docx']").onchange = () => {
        document.querySelector("label.file p").textContent = event.target.files[0].name
    }

    showModal()
    document.querySelector("div.submit").onclick = () => { postArticleRequest() }
}

// Показать форму для редактирования статьи
function showEditArticleModalForm() {
    // Заполняем модалку содержимым соответствующей константы с HTML кодом
    modalWrapper.firstElementChild.lastElementChild.innerHTML = putArticleFormHTML

    // Чекбокс "Редактировать текст статьи"
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

    // Собираем необходимые данные из соседних элементов
    var article = {
        id: event.target.parentElement.parentElement.parentElement.parentElement.parentElement.lastElementChild.textContent,
        title: event.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.textContent
    }

    document.querySelector("input[name='id']").value = article.id
    document.querySelector("input[name='title']").value = article.title

    showModal()
    document.querySelector("div.submit").onclick = () => { putArticleRequest() }
}

// Показать форму для удаления статьи
function showDeleteArticleModalForm() {
    // Заполняем модалку содержимым соответствующей константы с HTML кодом
    modalWrapper.firstElementChild.lastElementChild.innerHTML = deleteArticleFormHTML

    // Собираем необходимые данные из соседних элементов
    var article = {
        id: event.target.parentElement.parentElement.parentElement.parentElement.parentElement.lastElementChild.textContent
    }

    document.querySelector("input[name='id']").value = article.id

    showModal()
    document.querySelector("div.submit").onclick = () => { deleteArticleRequest() }
}

// Запрос на добавление статьи
function postArticleRequest() {
    var request = new XMLHttpRequest()

    var form = new FormData()
    form.append("title", document.querySelector("input[name='title']").value)
    form.append("docx", document.querySelector("input[name='docx']").files[0])
    form.append("viewMode", document.querySelector("input[name='viewMode']:checked").value)

    request.open(
        "POST",
        HOST + "/article",
        false
    )

    request.onerror = () => {
        alert("Request error.")
    }

    request.onload = () => {
        if (request.status == 400) {
            alert(request.response)
        }
        showUpdates()
    }

    request.send(form)
}

// Запрос на редактирование статьи
function putArticleRequest() {
    var request = new XMLHttpRequest()

    var form = new FormData()
    form.append("title", document.querySelector("input[name='title']").value)
    form.append("updateFile", document.querySelector("input[name='updateFile']").checked)
    form.append("docx", document.querySelector("input[name='docx']").files[0])
    form.append("viewMode", document.querySelector("input[name='viewMode']:checked").value)

    request.open(
        "PUT",
        HOST + "/article/" + document.querySelector("input[name='id']").value,
        false
    )

    request.onerror = () => {
        alert("Request error.")
    }

    request.onload = () => {
        if (request.status == 400) {
            alert(request.response)
        }
        showUpdates()
    }

    request.send(form)
}

// Запрос на удаление статьи
function deleteArticleRequest() {
    var request = new XMLHttpRequest()

    request.open(
        "DELETE",
        HOST + "/article/" + document.querySelector("input[name='id']").value,
        false
    )

    request.onerror = () => {
        alert("Request error.")
    }

    request.onload = () => {
        if (request.status == 400) {
            alert(request.response)
        }
        showUpdates()
    }

    request.send()
}

// ...Запрос на скачивание реализован через форму...

// Заполняем action перед отправкой формы на скачивание статьи
function downloadArticleFormSetAction() {
    event.target.setAttribute("action", "/article/" + 
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.lastElementChild.textContent)
}

function showUpdates() {
    closeModal()
    updates++
    showMessage(`${updates} updates`)
}

function showMessage(text) {
    const message = document.createElement('p')
    message.textContent = text
    message.style = 'padding: 20px; background: white; color: black; position: fixed; top: 30px; right: 30px; font-family: arial;'
    document.body.appendChild(message)
}
