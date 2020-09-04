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
    <label>
        <p>Змінити зображення</p>
        <input type="checkbox" name="updateFile">
    </label>
    <label class="file hidden">
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
        <p>Id</p>
        <input type="text" name="id">
    </label>
    <div class="submit">Delete</div>
</form>
`

// ! edit slider images
var addIcon = document.querySelectorAll("img[alt='add-sliderImg']")

var editIcons = document.querySelectorAll("img[alt='edit-slider-img']")
var deleteIcons = document.querySelectorAll("img[alt='delete-slider-img']")

for(let i = 0; i < addIcon.length; i++) {
    addIcon[i].onclick = () => { showAddSliderImgModalForm() }
}

for(let i = 0; i < editIcons.length; i++) {
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

    let sliderImg = {
        // sliderId: document.querySelector(".slider1Img-wrapper .sliderImgs").getAttribute("sliderId"),
        sliderId: event.target.parentElement.parentElement.lastElementChild.getAttribute("sliderId"),
        // position: document.querySelector(".slider1Img-wrapper .sliderImgs tbody").children.length,
        position: event.target.parentElement.parentElement.lastElementChild.firstElementChild.children.length
    }

    document.querySelector(".form-wrapper input[name='sliderId']").value = sliderImg.sliderId
    document.querySelector(".form-wrapper input[name='position']").value = sliderImg.position

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
        sliderId: event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("sliderId"),
        id: event.target.parentElement.parentElement.parentElement.parentElement.parentElement.lastElementChild.textContent,
        position: event.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.textContent
    }

    document.querySelector(".form-wrapper input[name='sliderId']").value = sliderImg.sliderId
    document.querySelector(".form-wrapper input[name='id']").value = sliderImg.id
    document.querySelector(".form-wrapper input[name='position']").value = sliderImg.position
    document.querySelector(".form-wrapper input[name='oldPosition']").value = sliderImg.position

    showModal()
    document.querySelector("div.submit").onclick = () => { putSliderImgRequest() }
}

// Показать форму для удаления картинки из слайдера
function showDeleteSliderImgModalForm() {
    // Заполняем модалку содержимым соответствующей константы с HTML кодом
    modalWrapper.firstElementChild.lastElementChild.innerHTML = deleteSliderImgFormHTML

    let sliderImg = {
        // sliderId: event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("sliderId"),
        id: event.target.parentElement.parentElement.parentElement.parentElement.parentElement.lastElementChild.textContent
    }

    // document.querySelector(".form-wrapper input[name='sliderId']").value = sliderImg.sliderId
    document.querySelector(".form-wrapper input[name='id']").value = sliderImg.id

    showModal()
    document.querySelector("div.submit").onclick = () => { deleteSliderImgRequest() }
}

// Запрос на добавление картинки в слайдер
function postSliderImgRequest() {
    var request = new XMLHttpRequest()
    
    var form = new FormData()
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

    var form = new FormData()
    form.append("position", document.querySelector("input[name='position']").value)
    form.append("oldPosition", document.querySelector("input[name='oldPosition']").value)
    form.append("updateFile", document.querySelector("input[name='updateFile']").checked)
    form.append("image", document.querySelector("input[name='image']").files[0])
    
    request.open(
        "PUT",
        HOST + "/slider/" + document.querySelector("input[name='sliderId']").value + "/" + document.querySelector("input[name='id']").value,
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

// Запрос на удаление картинки из слайдера
function deleteSliderImgRequest() {
    var request = new XMLHttpRequest()

    request.open(
        "DELETE",
        HOST + "/slider/img/" + 
        document.querySelector("input[name='id']").value,
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

    request.send()
}
