let slidesLists = []

let allSlides = []

let subSliderStep = 0

let subSlider

let subSliderButtons

let subSliderPoints = []

let modalImg, closeModalButton

function init() {
    allSlides = document.querySelectorAll(".sub-slider-slide")
    for(let i = 0; i < allSlides.length; i++) {
        allSlides[i].onclick = () => { openModalImage() }
    }

    subSlider = document.querySelector(".sub-slider")
    slidesLists = document.querySelectorAll(".slides-list")
    slidesLists[subSliderStep].style.display = "flex";

    subSliderButtons = document.querySelectorAll(".sub-slider-button")
    subSliderButtons[0].onclick = () => { subSliderStart(-1) }
    subSliderButtons[1].onclick = () => { subSliderStart(1) }

    // Создание точек управления
    subSliderPoints = document.querySelector(".sub-slider-points")
    for(let i = 0; i < slidesLists.length; i++) {
        let child = document.createElement("div")
        child.classList.add("sub-slider-point")
        child.setAttribute("value", i)
        child.onclick = () => { subSliderPointClick() }
        subSliderPoints.appendChild(child)
    }
    subSliderPoints.children[subSliderStep].classList.add("active-point")

    modalImg = document.querySelector(".modal-image")
    closeModalButton = document.querySelector(".close-modal-button")
    // closeModalButton.onclick = () => { closeModalImage() }
    modalImg.parentElement.onclick = () => { closeModalImage() }
    document.onkeydown = () => { event.key == "Escape" ? closeModalImage() : null }
}

init()

function subSliderStart(side) {
    // slider.style = "transform: scale(0);"

    let j = 0
    let interval = setInterval(() => {
        if (j == slidesLists[subSliderStep].children.length) {
            clearInterval(interval)
            return
        }
        slidesLists[subSliderStep].children[j].style = "transform: scale(0);"
        j++
    }, 30)

    setTimeout(() => {
        subSliderStep += side

        if (subSliderStep >= slidesLists.length) {
            subSliderStep = 0
        }
        if (subSliderStep < 0) {
            subSliderStep = slidesLists.length - 1
        }

        for(let i = 0; i < slidesLists[subSliderStep].children.length; i++) {
                slidesLists[subSliderStep].children[i].style = "transform: scale(0);"
        }

        setTimeout(() => {
            for(let i = 0; i < slidesLists.length; i++) {
                slidesLists[i].style.display = "none";
            }
            slidesLists[subSliderStep].style.display = "flex";
    
            for(let i = 0; i < slidesLists.length; i++) {
                subSliderPoints.children[i].classList.remove("active-point")
            }
            subSliderPoints.children[subSliderStep].classList.add("active-point")
            // slider.style = "transform: scale(1);"

            let j = 0
            let interval = setInterval(() => {
                if (j == slidesLists[subSliderStep].children.length) {
                    clearInterval(interval)
                    return
                }
                slidesLists[subSliderStep].children[j].style = "transform: scale(1);"
                j++
            }, 30)
        }, 300)
    }, 300)
}

function subSliderPointClick() {
    let value = event.target.getAttribute("value")

    let interval = setInterval(() => {
        if (value == subSliderStep) {
            clearInterval(interval)
            return
        } else if (value < subSliderStep) {
            subSliderStart(-1)
        } else {
            subSliderStart(1)
        }
    }, 100)
}

function openModalImage() {
    modalImg.src = event.target.src

    closeModalButton.style.display = "block"

    modalImg.parentElement.classList.add("show-modal")
}

function closeModalImage() {
    modalImg.parentElement.classList.remove("show-modal")

    closeModalButton.style.display = "none"
}

setInterval(() => {
    subSliderStart(1)
}, 5000)