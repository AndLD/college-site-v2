if (!menuWrapper) {
    var menuWrapper = document.querySelector(".profile-menu-wrapper")
}
if (!burgerWrapper) {
    var burgerWrapper = menuWrapper.firstElementChild

    burgerWrapper.firstElementChild.onclick = () => { showMenu() }
}

function showMenu() {
    menuWrapper.classList.add("open")
    burgerWrapper.firstElementChild.onclick = () => { closeMenu() }
}

function closeMenu() {
    menuWrapper.classList.remove("open")
    burgerWrapper.firstElementChild.onclick = () => { showMenu() }
}