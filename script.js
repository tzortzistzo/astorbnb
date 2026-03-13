const sections=document.querySelectorAll('.section')
const menuItems=document.querySelectorAll('#menu li')
const number=document.getElementById('sectionNumber')

let current=0

function updateNumber(){
let n=current+1
if(n<10)n='0'+n
number.innerText=n
}

function goToSection(index){
if(index<0||index>=sections.length)return
sections[current].classList.remove('active')
sections[index].classList.add('active')
current=index
menuItems.forEach(i=>i.classList.remove('active'))
menuItems[current].classList.add('active')
updateNumber()
}

window.addEventListener('wheel',e=>{
if(e.deltaY>0)goToSection(current+1)
else goToSection(current-1)
})

let startY=0
window.addEventListener('touchstart',e=>{startY=e.touches[0].clientY})
window.addEventListener('touchend',e=>{
let endY=e.changedTouches[0].clientY
if(startY-endY>50)goToSection(current+1)
if(endY-startY>50)goToSection(current-1)
})

menuItems.forEach((item,index)=>{item.onclick=()=>goToSection(index)})
updateNumber()

const hamburger=document.getElementById('hamburger')
const mobileMenu=document.getElementById('mobileMenu')
const mobileClose=document.getElementById('mobileClose')

hamburger.onclick=()=>mobileMenu.classList.add('open')
mobileClose.onclick=()=>mobileMenu.classList.remove('open')

document.querySelectorAll('.mobile-item').forEach(item=>{
item.onclick=()=>{
goToSection(parseInt(item.dataset.index))
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
},500)
