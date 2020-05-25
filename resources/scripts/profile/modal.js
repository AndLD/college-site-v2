const HOST = "http://localhost:3000"//"https://090b1b22.ngrok.io"

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

var dropMenuElems = document.querySelectorAll(".drop-menu")

function visibleDropMenuElems() {
    for(i = 0; i < dropMenuElems.length; i++) {
        dropMenuElems[i].style.display = "block";
    }
}