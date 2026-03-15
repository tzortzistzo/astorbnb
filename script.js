const hamburger = document.getElementById("hamburger")
const menu = document.getElementById("menu")

hamburger.addEventListener("click",()=>{
menu.classList.toggle("active")
})

document.querySelectorAll("#menu li").forEach(item=>{

item.addEventListener("click",()=>{

let id = item.dataset.section

document.getElementById(id).scrollIntoView({
behavior:"smooth"
})

menu.classList.remove("active")

})

})

/* MAP */

var map = L.map('map').setView([40.6401,22.9444], 13)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© OpenStreetMap'
}).addTo(map)
