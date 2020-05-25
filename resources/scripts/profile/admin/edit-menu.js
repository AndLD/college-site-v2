require(["/resources/scripts/profile/modal.js"])

// ! edit menu
var addIcons = document.querySelectorAll("img[alt='add-menu']")
var addMainMenuElemIcon = document.querySelector("img[alt='add-main-menu-elem']")
var editIcons = document.querySelectorAll("img[alt='edit-menu']")
var deleteIcons = document.querySelectorAll("img[alt='delete-menu']")

for(var i = 0; i < addIcons.length; i++) {
    addIcons[i].onclick = () => { showAddMenuElemForm() }
}

addMainMenuElemIcon.onclick = () => { showAddMenuElemForm(true) }

for(var i = 0; i < editIcons.length; i++) {
    editIcons[i].onclick = () => { showEditMenuElemForm() }
    deleteIcons[i].onclick = () => { showDeleteMenuElemForm() }
}

// HTML код для формы добавления элемента меню
const postMenuFormHTML = 
`
<div class="modal-title">Додавання элемента меню</div>
<form>
    <label>
        <p>Title</p>
        <input type="text" name="title">
    </label>
    <label>
        <p>Link</p>
        <input type="text" name="link">
    </label>
    <label class="hidden">
        <p>parentId</p>
        <input type="text" name="parentId">
    </label>
    <label class="hidden">
        <p>Position</p>
        <input type="text" name="position">
    </label>
    <label>
        <p>Footer</p>
        <input type="checkbox" name="footer">
    </label>
    <div><div class="submit">Add</div></div>
</form>
`

// HTML код для формы изменения элемента меню
const putMenuFormHTML =
`
<div class="modal-title">Редагування элемента меню</div>
<form>
    <label class="hidden">
        <p>id</p>
        <input type="text" name="id">
    </label>
    <label>
        <p>Title</p>
        <input type="text" name="title">
    </label>
    <label>
        <p>Link</p>
        <input type="text" name="link">
    </label>
    <label class="hidden">
        <p>parentId</p>
        <input type="text" name="parentId">
    </label>
    <label>
        <p>Position</p>
        <input type="text" name="position">
    </label>
    <label class="hidden">
        <p>oldPosition</p>
        <input type="text" name="oldPosition">
    </label>
    <label>
        <p>Footer</p>
        <input type="checkbox" name="footer">
    </label>
    <div><div class="submit">Edit</div></div>
</form>
`

// HTML код для формы удаления элемента меню
const deleteMenuFormHTML =
`
<div class="modal-title">Видалення элемента меню</div>
<form action>
    <label class="hidden">
        <p>id</p>
        <input type="text" name="id">
    </label>
    <label class="hidden">
        <p>parentId</p>
        <input type="text" name="parentId">
    </label>
    <label class="hidden">
        <p>oldPosition</p>
        <input type="text" name="oldPosition">
    </label>
    <div><div class="submit">Delete</div></div>
</form>
`

var dropMenuElems = document.querySelectorAll(".drop-menu")

function hideDropMenuElems() {
    for(i = 0; i < dropMenuElems.length; i++) {
        dropMenuElems[i].style.display = "none";
    }
}

// Показать форму для добавления элемента меню
function showAddMenuElemForm(isMainElem = false) {
    // Заполняем модалку содержимым соответствующей константы с HTML кодом
    modalWrapper.firstElementChild.lastElementChild.innerHTML = postMenuFormHTML

    var menuElem = { 
        // Получаем id родителя элемента, над которым производится действие
        parentId: isMainElem ? "null" : event.target.parentElement.parentElement.firstElementChild.getAttribute("id"),
        // Определяем позицию нового элемента: находим количество элементов-братьев (у которых родитель имеет такой же id) + 1
        position: (isMainElem ? document.querySelector("#MENU").children.length : event.target.parentElement.parentElement.lastElementChild.firstElementChild.children.length) + 1
    }

    document.querySelector(".form-wrapper input[name='parentId']").value = menuElem.parentId
    document.querySelector(".form-wrapper input[name='position']").value = menuElem.position

    document.querySelector(".form-wrapper input[name='footer']").parentElement.classList.add("hidden")
    if (isMainElem) {
        document.querySelector(".form-wrapper input[name='footer']").parentElement.classList.remove("hidden")
    }

    hideDropMenuElems()
    showModal()

    document.querySelector("div.submit").onclick = () => { postMenuRequest() };
}

// Показать форму для редактирования элемента меню
function showEditMenuElemForm() {
    modalWrapper.firstElementChild.lastElementChild.innerHTML = putMenuFormHTML

    var parentId = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.getAttribute("id")
    if (parentId == null) parentId = "null" 

    var menuElem = { 
        id: event.target.parentElement.parentElement.firstElementChild.getAttribute("id"), 
        title: event.target.parentElement.parentElement.firstElementChild.textContent, 
        link: event.target.parentElement.parentElement.firstElementChild.getAttribute("href"), 
        parentId: parentId,
        position: event.target.parentElement.parentElement.firstElementChild.getAttribute("position"),
        oldPosition: event.target.parentElement.parentElement.firstElementChild.getAttribute("position"),
        footer: (event.target.parentElement.parentElement.firstElementChild.getAttribute("footer") == "1" ? true : false)
    }

    document.querySelector(".form-wrapper input[name='id']").value = menuElem.id
    document.querySelector(".form-wrapper input[name='title']").value = menuElem.title
    document.querySelector(".form-wrapper input[name='link']").value = menuElem.link
    document.querySelector(".form-wrapper input[name='parentId']").value = menuElem.parentId
    document.querySelector(".form-wrapper input[name='position']").value = menuElem.position
    document.querySelector(".form-wrapper input[name='oldPosition']").value = menuElem.oldPosition
    document.querySelector(".form-wrapper input[name='footer'").checked = menuElem.footer

    document.querySelector(".form-wrapper input[name='footer']").parentElement.classList.add("hidden")
    if (parentId == "null") {
        document.querySelector(".form-wrapper input[name='footer']").parentElement.classList.remove("hidden")
    }
    
    hideDropMenuElems()
    showModal()

    document.querySelector("div.submit").onclick = () => { putMenuRequest() };
}

// Показать форму для удаления элемента меню
function showDeleteMenuElemForm() {
    modalWrapper.firstElementChild.lastElementChild.innerHTML = deleteMenuFormHTML

    var parentId = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.getAttribute("id")
    if (parentId == null) parentId = "null"

    var menuElem = { 
        id: event.target.parentElement.parentElement.firstElementChild.getAttribute("id"),
        parentId: parentId,
        oldPosition: event.target.parentElement.parentElement.firstElementChild.getAttribute("position")
    }

    document.querySelector(".form-wrapper input[name='id']").value = menuElem.id
    document.querySelector(".form-wrapper input[name='parentId']").value = menuElem.parentId
    document.querySelector(".form-wrapper input[name='oldPosition']").value = menuElem.oldPosition

    hideDropMenuElems()
    showModal()

    document.querySelector("div.submit").onclick = () => { deleteMenuRequest() };
}

// Запрос на добавление элемента меню
function postMenuRequest() {
    var request = new XMLHttpRequest()

    var body = "title=" + document.querySelector("input[name='title']").value +
    "&" + "link=" + document.querySelector("input[name='link']").value +
    "&" + "parentId=" + document.querySelector("input[name='parentId']").value +
    "&" + "position=" + document.querySelector("input[name='position']").value +
    "&" + "footer=" + document.querySelector("input[name='footer']").checked

    request.open(
        "POST", 
        HOST + "/menu",
        false
    )

    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    request.onerror = () => {
        alert("Request error.")
    }

    request.onload = () => {
        if (request.status == 400) {
            alert(request.response)
        }
        window.location.reload()
    }

    request.send(body)
}

// Запрос на изменение элемента меню
function putMenuRequest() {
    var request = new XMLHttpRequest()

    var body = "title=" + document.querySelector("input[name='title']").value +
    "&" + "link=" + document.querySelector("input[name='link']").value +
    "&" + "parentId=" + document.querySelector("input[name='parentId']").value +
    "&" + "position=" + document.querySelector("input[name='position']").value +
    "&" + "oldPosition=" + document.querySelector("input[name='oldPosition']").value +
    "&" + "footer=" + document.querySelector("input[name='footer']").checked

    request.open(
        "PUT", 
        HOST + "/menu" +
        "/" + document.querySelector("input[name='id']").value,
        false
    )

    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    request.onerror = () => {
        alert("Request error.")
    }

    request.onload = () => {
        if (request.status == 400) {
            alert(request.response)
        }
        window.location.reload()
    }

    request.send(body)
}

// Запрос на удаление элемента меню
function deleteMenuRequest() {
    var request = new XMLHttpRequest()

    var body = "parentId=" + document.querySelector("input[name='parentId']").value +
    "&" + "oldPosition=" + document.querySelector("input[name='oldPosition']").value

    request.open(
        "DELETE", 
        HOST + "/menu/" + 
        document.querySelector("input[name='id']").value,
        false
    )

    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    request.onerror = () => {
        alert("Request error.")
    }

    request.onload = () => {
        if (request.status == 400 || request.status == 403) {
            alert(request.response)
        }
        window.location.reload()
    }

    request.send(body)
}