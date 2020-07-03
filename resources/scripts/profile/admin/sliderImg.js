require(["/resources/scripts/profile/modal.js"])

// HTML код для формы добавления картинки в слайдер
const postSliderImgFormHTML =
`
<div class="modal-title">Додавання зображення</div>
<form>
    <label>
        <p>SliderId</p>
        <input type="text" name="sliderId">
    </label>
    <label>
        <p>Position</p>
        <input type="text" name="position">
    </label>
    <label class="file">
        <p>Choose file *.jpg / *.jpeg / *.png</p>
        <input type="file" name="image">
    </label>
    <div class="submit">Add</div>
</form>
`

// HTML код для формы редактирования картинки в слайдере
const putSliderImgFormHTML =
`
<div class="modal-title">Редагування зображення</div>
<form>
    <label>
        <p>SliderId</p>
        <input type="text" name="sliderId">
    </label>
    <label>
        <p>Id</p>
        <input type="text" name="id">
    </label>
    <label>
        <p>Position</p>
        <input type="text" name="position">
    </label>
    <label>
        <p>oldPosition</p>
        <input type="text" name="oldPosition">
    </label>
    <label class="file">
        <p>Choose file *.jpg / *.jpeg / *.png</p>
        <input type="file" name="image">
    </label>
    <div class="submit">Edit</div>
</form>
`

// HTML код для формы удаления картинки из слайдера
const deleteSliderImgFormHTML =
`
<div class="modal-title">Видалення зображення</div>
<form>
    <label>
        <p>SliderId</p>
        <input type="text" name="sliderId">
    </label>
    <label>
        <p>Id</p>
        <input type="text" name="id">
    </label>
    <label>
        <p>oldPosition</p>
        <input type="text" name="oldPosition">
    </label>
    <div class="submit">Delete</div>
</form>
`

// ! edit slider images
var addIcon = document.querySelector("img[alt='add-sliderImg']")

var editIcons = document.querySelectorAll("img[alt='edit-slider-img']")
var deleteIcons = document.querySelectorAll("img[alt='delete-slider-img']")

addIcon.onclick = () => { showAddSliderImgModalForm() }

for(var i = 0; i < editIcons.length; i++) {
    editIcons[i].onclick = () => { showEditSliderImgModalForm() }
    deleteIcons[i].onclick = () => { showDeleteSliderImgModalForm() }
}

// Показать форму для добавления картинки в слайдер
function showAddSliderImgModalForm() {
    // Заполняем модалку содержимым соответствующей константы с HTML кодом
    modalWrapper.firstElementChild.lastElementChild.innerHTML = postSliderImgFormHTML

    // Выводим название выбранного файла
    document.querySelector("input[name='image']").onchange = () => {
        document.querySelector("label.file p").textContent = event.target.files[0].name
    }

    showModal()
    document.querySelector("div.submit").onclick = () => { postSliderImgRequest() }
}

// Показать форму для редактирования картинки в слайдере
function showEditSliderImgModalForm() {
    // Заполняем модалку содержимым соответствующей константы с HTML кодом
    modalWrapper.firstElementChild.lastElementChild.innerHTML = putSliderImgFormHTML

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
    document.querySelector("input[name='image']").onchange = () => {
        document.querySelector("label.file p").textContent = event.target.files[0].name
    }

    let sliderImg = {
        sliderId: 3,
        id: 3,
        position: 3,
        oldPosition: 3
    }

    document.querySelector(".form-wrapper input[name='sliderId']").value = sliderImg.sliderId
    document.querySelector(".form-wrapper input[name='id']").value = sliderImg.id
    document.querySelector(".form-wrapper input[name='position']").value = sliderImg.position
    document.querySelector(".form-wrapper input[name='oldPosition']").value = sliderImg.oldPosition

    showModal()
    document.querySelector("div.submit").onclick = () => { postSliderImgRequest() }
}

// Показать форму для удаления картинки из слайдера
function showDeleteSliderImgModalForm() {
    // Заполняем модалку содержимым соответствующей константы с HTML кодом
    modalWrapper.firstElementChild.lastElementChild.innerHTML = deleteSliderImgFormHTML

    let sliderImg = {
        sliderId: 3,
        id: 3,
        oldPosition: 3
    }

    document.querySelector(".form-wrapper input[name='sliderId']").value = sliderImg.sliderId
    document.querySelector(".form-wrapper input[name='id']").value = sliderImg.id
    document.querySelector(".form-wrapper input[name='oldPosition']").value = sliderImg.oldPosition

    showModal()
    document.querySelector("div.submit").onclick = () => { deleteSliderImgRequest() }
}

// Запрос на добавление картинки в слайдер
function postSliderImgRequest() {
    var request = new XMLHttpRequest()
    
    var form = new FormData()
    form.append("sliderId", document.querySelector("input[name='sliderId']").value)
    form.append("position", document.querySelector("input[name='position']").value)
    form.append("image", document.querySelector("input[name='image']").files[0])

    request.open(
        "POST",
        HOST + "/slider/" + document.querySelector("input[name='sliderId']").value,
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

// Запрос на изменение картинки в слайдер
function putSliderImgRequest() {
    var request = new XMLHttpRequest()

    var body = "position=" + document.querySelector("input[name='position']").value +
    "&" + "oldPosition=" + document.querySelector("input[name='oldPosition']").value +
    "&" + "footer=" + document.querySelector("input[name='footer']").checked

    request.open(
        "PUT",
        HOST + "/slider/" + document.querySelector("input[name='sliderId']").value + "/" + document.querySelector("input[name='id']").value,
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

// Запрос на удаление картинки из слайдера
function deleteSliderImgRequest() {
    var request = new XMLHttpRequest()

    var body = "oldPosition=" + document.querySelector("input[name='oldPosition']").value

    request.open(
        "DELETE",
        HOST + "/slider/" + document.querySelector("input[name='sliderId']").value + "/" + document.querySelector("input[name='id']").value,
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
