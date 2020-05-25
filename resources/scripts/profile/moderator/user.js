require(["/resources/scripts/profile/modal.js"])

// HTML код для формы регистрации пользователя
const postUserFormHTML =
`
<div class="modal-title">Реєстрування користувача</div>
<form>
    <label>
        <p>Username</p>
        <input type="text" name="username">
    </label>
    <label>
        <p>Password</p>
        <input type="password" name="password">
    </label>
    <label>
        <p>Userrole</p>
        <select size="1" name="userrole">
            <option value="admin">admin</option>
            <option value="moderator">moderator</option>
            <option value="group">group</option>
        </select>
    </label>
    <div class="submit">Register</div>
</form>
`

// HTML код для формы редактирования пользователя
const putUserFormHTML =
`
<div class="modal-title">Редагування користувача</div>
<form>
    <label>
        <p>Id</p>
        <input type="text" name="id">
    </label>    
    <label>
        <p>Username</p>
        <input type="text" name="username">
    </label>
    <label>
        <p>Userrole</p>
        <select size="1" name="userrole">
            <option value="admin">admin</option>
            <option value="moderator">moderator</option>
            <option value="group">group</option>
        </select>
    </label>
    <div class="submit">Edit</div>
</form>
`

// HTML код для формы удаления пользователя
const deleteUserFormHTML =
`
<div class="modal-title">Видалення користувача</div>
<form>
    <label>
        <p>Id</p>
        <input type="text" name="id">
    </label>    
    <div class="submit">Delete</div>
</form>
`

// ! edit user
var addIcon = document.querySelector("img[alt='add-user']")

var editIcons = document.querySelectorAll("img[alt='edit-user']")
var deleteIcons = document.querySelectorAll("img[alt='delete-user']")

addIcon.onclick = () => { showAddUserModalForm() }

for(var i = 0; i < editIcons.length; i++) {
    editIcons[i].onclick = () => { showEditUserModalForm() }
    deleteIcons[i].onclick = () => { showDeleteUserModalForm() }
}

// Показать форму для регистрации пользователя
function showAddUserModalForm() {
    // Заполняем модалку содержимым соответствующей константы с HTML кодом
    modalWrapper.firstElementChild.lastElementChild.innerHTML = postUserFormHTML

    showModal()
    document.querySelector("div.submit").onclick = () => { postUserRequest() }
}

// Показать форму для редактирования пользователя
function showEditUserModalForm() {
    // Заполняем модалку содержимым соответствующей константы с HTML кодом
    modalWrapper.firstElementChild.lastElementChild.innerHTML = putUserFormHTML

    // Собираем необходимые данные из соседних элементов
    var user = {
        id: event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[4].textContent,
        username: event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].textContent,
        userrole: event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].textContent
    }

    document.querySelector("input[name='id']").value = user.id
    document.querySelector("input[name='username']").value = user.username
    document.querySelector("option[value='" + user.userrole + "']").selected = true

    showModal()
    document.querySelector("div.submit").onclick = () => { putUserRequest() }
}

// Показать форму для удаления пользователя
function showDeleteUserModalForm() {
    // Заполняем модалку содержимым соответствующей константы с HTML кодом
    modalWrapper.firstElementChild.lastElementChild.innerHTML = deleteUserFormHTML

    // Собираем необходимые данные из соседних элементов
    var user = {
        id: event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[4].textContent
    }

    document.querySelector("input[name='id']").value = user.id

    showModal()
    document.querySelector("div.submit").onclick = () => { deleteUserRequest() }
}

// Запрос на добавления пользователя
function postUserRequest() {
    let request = new XMLHttpRequest()

    var body = "username=" + document.querySelector("input[name='username']").value +
    "&" + "password=" + document.querySelector("input[name='password']").value +
    "&" + "userrole=" + function() {
        let optionArray = document.querySelectorAll("option")
        for(let i = 0; i < optionArray.length; i++) {
            if (optionArray[i].selected) {
                return optionArray[i].value
            }
        }
    }()

    request.open(
        "POST",
        HOST + "/user",
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

// Запрос на редактирование пользователя
function putUserRequest() {
    var request = new XMLHttpRequest()

    var body = "username=" + document.querySelector("input[name='username']").value +
    "&" + "userrole=" + function() {
        let optionArray = document.querySelectorAll("option")
        for(let i = 0; i < optionArray.length; i++) {
            if (optionArray[i].selected) {
                return optionArray[i].value
            }
        }
    }()

    request.open(
        "PUT",
        HOST + "/user/" + document.querySelector("input[name='id']").value,
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

// Запрос на удаление пользователя
function deleteUserRequest() {
    var request = new XMLHttpRequest()

    request.open(
        "DELETE",
        HOST + "/user/" + document.querySelector("input[name='id']").value,
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
