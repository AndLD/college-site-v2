if (parseInt(document.documentElement.clientWidth) > 480) {
    // fix links block
    let pageBlock = document.querySelector(".desk-wrapper").firstElementChild
    let wrapper = document.querySelector(".desk-wrapper").lastElementChild

    let targetElement = wrapper.lastElementChild
    targetElement.style.height = pageBlock.offsetHeight - ((wrapper.children.length > 1 ? wrapper.children[0].offsetHeight : 0) + (wrapper.children.length > 2 ? wrapper.children[1].offsetHeight : 0)) - 100
    console.log(pageBlock.offsetHeight)
    console.log(wrapper.children[0].offsetHeight + (wrapper.children.length > 2 ? wrapper.children[1].offsetHeight : 0))
    console.log(targetElement.style.height)
    // fix page block
    let pageDeskImg = document.querySelectorAll(".page-block img")

    for(let i = 0; i < pageDeskImg.length; i++) {
        pageDeskImg[i].parentElement.style = "text-align: center; text-indent: 0;"
    }
}