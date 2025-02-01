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
let darkModeBtn = $.querySelectorAll(".theme-icon")
let dark = $.querySelector(".icon-dark")
let light = $.querySelector(".icon-light")
let darkModeDesktop = $.querySelectorAll(".theme-icon-desktop")
let darkDesktop = $.querySelector(".icon-dark-desktop")
let lightDesktop = $.querySelector(".icon-light-desktop")
let body = $.body

darkModeBtn.forEach(function (Btn) {
    Btn.addEventListener("click", function () {
        body.classList.toggle("dark")

    })
})

if (body.className == "dark") {
    dark.classList.remove("display-none")
    light.classList.add("display-none")
    console.log("Dark");
} else {
    light.classList.remove("display-none")
    dark.classList.add("display-none")
    console.log("light");
}

darkModeDesktop.forEach(function (Btn) {
    Btn.addEventListener("click", function () {
        body.classList.toggle("dark")

    })
})

if (body.className == "dark") {
    darkDesktop.classList.remove("display-none")
    lightDesktop.classList.add("display-none")
    console.log("Dark");
} else {
    lightDesktop.classList.remove("display-none")
    darkDesktop.classList.add("display-none")
    console.log("light");
}

console.log(darkDesktop);
console.log(lightDesktop);
console.log(darkModeDesktop);