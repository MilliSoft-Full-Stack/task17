let darkmode = document.querySelector(".darkmode")

let body = document.querySelector("body")

darkmode.addEventListener("click",function(){
    if(body.className.includes("active")){
        body.classList.remove("active")
        localStorage.setItem("mode", false)
    } else {
        body.classList.add("active")
        localStorage.setItem("mode", true)
    }
})

document.addEventListener("DOMContentLoaded", function(){
    if(JSON.parse(localStorage.getItem("mode"))){
        body.classList.add("active")
    } else {
        body.classList.remove("active")
    }
})