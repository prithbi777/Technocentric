

let darkbtn = document.getElementById('darkmode')
let nav = document.getElementById("navi")
let love = document.getElementById("love")
let shop = document.getElementById("shop")
let btnn = document.getElementById("btnn")
let lgsp = document.getElementById("lgsp")
let sld = document.getElementById("sld")
let imgs = document.getElementById("imgs")

// Function to apply dark mode styles
function applyDarkMode() {
    document.body.style.backgroundColor = "darkslategray"
    document.body.style.color = "white"
    nav.style.backgroundColor = "darkslategray"
    love.style.color = "white"
    shop.style.color = "white"
    btnn.style.color = "white"
    lgsp.style.color = "white"
    sld.style.backgroundColor = "darkslategray"
    imgs.style.backgroundColor = "darkslategray"

    
}

// Function to apply light mode styles
function applyLightMode() {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    nav.style.backgroundColor = "white"
    love.style.color = "black"
    shop.style.color = "black"
    btnn.style.color = "black"
    lgsp.style.color = "black"
    sld.style.backgroundColor = "white"
    imgs.style.backgroundColor = "white"
}

// Check for dark mode preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
    applyDarkMode()
}

// Add event listener to toggle dark mode
darkbtn.addEventListener("click", function () {
    if (document.body.style.backgroundColor === "darkslategray") {
        applyLightMode()
        localStorage.removeItem('darkMode') // Remove dark mode preference
    } else {
        applyDarkMode()
        localStorage.setItem('darkMode', 'enabled') // Set dark mode preference
    }
})





