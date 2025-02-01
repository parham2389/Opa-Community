const $ = document

// Menu
let menuBtn = $.querySelector(".burger-menu")
let menu = $.querySelector(".respon-menu")
let closeMenu = $.querySelector(".close-menu")

menuBtn.addEventListener("click", function () {
    menu.classList.add("active")
})

closeMenu.addEventListener("click", function () {
    menu.classList.remove("active")
})

// Dark Mode
let darkModeBtn = $.querySelector(".theme-icon")
let body = $.body

darkModeBtn.addEventListener("click", function () {
    body.classList.toggle("dark")
})