import { Games } from "./games.js"

let links=document.querySelectorAll('.navbar li a')
links.forEach((link)=>{
    link.addEventListener('click',()=>{
        links.forEach((link)=>{link.classList.remove("active")})
        link.classList.add("active")
        let games=new Games(link.innerHTML)
    })
})
let games=new Games("mmorpg")

