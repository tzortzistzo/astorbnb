const sections=document.querySelectorAll(".section")
const menuItems=document.querySelectorAll("#menu li")
const number=document.getElementById("sectionNumber")
const hamburger=document.getElementById("hamburger")
const menu=document.getElementById("menu")

let current=0
let animating=false

function updateMenu(){

menuItems.forEach(item=>item.classList.remove("active"))
menuItems[current].classList.add("active")

}

function updateNumber(){

let n=current+1
if(n<10)n="0"+n
number.innerText=n

}

function goToSection(index){

if(animating) return
if(index<0 || index>=sections.length) return

animating=true

sections[current].classList.remove("active")

setTimeout(()=>{

sections[index].classList.add("active")
current=index

updateMenu()
updateNumber()

setTimeout(()=>{animating=false},900)

},900)

}

/* wheel navigation */

window.addEventListener("wheel",(e)=>{

if(animating) return

if(e.deltaY>0){
goToSection(current+1)
}else{
goToSection(current-1)
}

})

/* touch navigation */

let touchStart=0

window.addEventListener("touchstart",(e)=>{
touchStart=e.touches[0].clientY
})

window.addEventListener("touchend",(e)=>{

let touchEnd=e.changedTouches[0].clientY

if(Math.abs(touchStart-touchEnd)<50) return

if(touchStart>touchEnd){
goToSection(current+1)
}else{
goToSection(current-1)
}

})

/* menu click */

menuItems.forEach((item,index)=>{
item.addEventListener("click",()=>{

menu.classList.remove("open")
goToSection(index)

})
})

/* hamburger */

hamburger.addEventListener("click",()=>{
menu.classList.toggle("open")
})

/* map */

var map=L.map('map').setView([40.6401,22.9444],13)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'© OpenStreetMap'
}).addTo(map)
