let baseUrl = "https://restcountries.com/v3.1/"

let countries = document.querySelector(".countries")

function getData(url){
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        data.forEach(element => {
            /* console.log(element);  */    
            countries.innerHTML+=  `
            <div class="country">
                <a href="./assets/html/details.html?name=${element.name.common}" >
                    <img src="${element.flags.png}">
            
                    <div class="caption">
                        <h2>${element.name.common}</h2>
                        <p>Population: <span>${element.population}</span></p>
                        <p>Region: <span>${element.region}</span></p>
                        <p>Capital: <span>${element.capital}</span></p>
                    </div>
                </a>
            </div>
            `      
        });
    })
}



document.addEventListener("DOMContentLoaded", ()=>{
    getData(`${baseUrl}all?fields=name,flags,population,capital,region`)
})


document.querySelector("input").addEventListener("keyup",function(){
    let search = this.value
    countries.innerHTML = ""
    getData(`${baseUrl}name/${search}`)
    /* .then(this.value="") */
})

document.querySelector("#glass").addEventListener("click",function(event){
    let input = document.querySelector("input")
    let search = input.value
    countries.innerHTML = ""
    event.preventDefault()
    getData(`${baseUrl}name/${search}`)
    /* .then(input.value="") */
})