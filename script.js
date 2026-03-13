const sections=document.querySelectorAll('.section')
const menuItems=document.querySelectorAll('#menu li')

menuItems.forEach((item,index)=>{
item.onclick=()=>{
sections[index].scrollIntoView({behavior:'smooth'})
}
})

const hamburger=document.getElementById('hamburger')
const mobileMenu=document.getElementById('mobileMenu')
const mobileClose=document.getElementById('mobileClose')

hamburger.onclick=()=>mobileMenu.classList.add('open')
mobileClose.onclick=()=>mobileMenu.classList.remove('open')

document.querySelectorAll('.mobile-item').forEach(item=>{
item.onclick=()=>{
sections[item.dataset.index].scrollIntoView({behavior:'smooth'})
mobileMenu.classList.remove('open')
}
})

setTimeout(()=>{

var map=L.map('map').setView([40.6355,22.9444],14)

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{
attribution:'© OpenStreetMap & CARTO'
}).addTo(map)

const coords=[
[40.6354,22.9432,'Γρηγορίου Ζαλίκη 4'],
[40.6328,22.9555,'Ακροπόλεως 11'],
[40.6400,22.9481,'Σοφοκλέους 21'],
[40.6387,22.9415,'Αγίου Νικολάου 22'],
[40.6409,22.9475,'Στρατηγού Δουμπιώτου 1'],
[40.6395,22.9450,'Βαρβάκη 3'],
[40.6366,22.9497,'Πολιορκητού 15'],
[40.6362,22.9420,'Εγνατία 10'],
[40.6346,22.9416,'Τσιμισκή 33']
]

coords.forEach(c=>{
L.marker([c[0],c[1]]).addTo(map).bindPopup(c[2])
})

map.invalidateSize()

},500)
