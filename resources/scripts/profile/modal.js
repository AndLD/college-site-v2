// const HOST = ""

// ! modal
var closeModalButton = document.querySelector(".close-modal")
closeModalButton.onclick = () => { closeModal(); visibleDropMenuElems() }

var modalWrapper = document.querySelector(".modal-wrapper")

function showModal() {
    modalWrapper.classList.add("show-modal")
}

function closeModal() {
    modalWrapper.classList.remove("show-modal")
}

if (!dropMenuElems) {
    var dropMenuElems = document.querySelectorAll(".drop-menu")
}

function visibleDropMenuElems() {
    for(i = 0; i < dropMenuElems.length; i++) {
        dropMenuElems[i].style.display = "block";
    }
}