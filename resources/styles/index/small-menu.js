document.querySelector(".small-menu-button").onclick = () => { showSmallMenu() }
document.querySelector(".small-menu-close-button").onclick = () => { closeSmallMenu() }

// let dropMenus = document.querySelectorAll(".drop-menu")

function showSmallMenu() {
    document.querySelector(".menu-wrapper").classList.add("show-small-menu")
    document.body.classList.add("no-scroll")
    // for(let i = 0; i < dropMenus.length; i++) {
    //     dropMenus[i].previousElementSibling.onclick = () => { showDropMenu() }
    // }
}

// function showDropMenu() {
//     for(let i = 0; i < dropMenus.length; i++) {
//         dropMenus[i].classList.remove("show-drop-menu")
//     }
//     // console.log(event.target)
//     // console.log(event.target.parentElement.nextElementSibling)
//     event.target.parentElement.nextElementSibling.classList.add("show-drop-menu")
    
// }

function closeSmallMenu() {
    // for(let i = 0; i < dropMenus.length; i++) {
    //     dropMenus[i].classList.remove("show-drop-menu")
    // }

    document.querySelector(".menu-wrapper").classList.remove("show-small-menu")
    document.body.classList.remove("no-scroll")
}
