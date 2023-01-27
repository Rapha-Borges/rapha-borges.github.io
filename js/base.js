const nav = document.querySelector('nav')

document.addEventListener("scroll", e => {

    if (scrollY > 100) {
        nav.classList.add('nav-scrolling')
        nav.classList.remove('invisible')
    } else {
        nav.classList.remove('nav-scrolling')
        nav.classList.remove('invisible')
    }
})