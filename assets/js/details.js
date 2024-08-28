

    let baseUrl = "https://restcountries.com/v3.1/"

    let countryName = new URLSearchParams(window.location.search).get("name")
    /* console.log(countryName); */

    let back = document.querySelector(".back")
    back.addEventListener("click", () => {
       history.back(); /* window.history.back(); */
    })

    fetch(`${baseUrl}name/${countryName}`)
    .then(res=>res.json())
    .then(data=>{
        /* console.log(data[0]); */

        
        let country = document.querySelector(".country")

        

        country.innerHTML= `
        <img src="" alt="flag">

        <div class="caption">
            <h2 id="commonName"></h2>

            <div class="infos">
                <p>Native Name: <span id="nativeName"></span></p>
                <p>Population: <span id="population"></span></p>
                <p>Region: <span id="region"></span></p>
                <p>Sub Region: <span id="subregion"></span></p>
                <p>Capital: <span id="capital"></span></p>
                <p>Top Level Domain: <span id="domain"></span></p>
                <p>Currencies: <span id="currencies"></span></p>
                <p>Languages: <span id="languages"></span></p>
            </div>

            <div class="borders">
                <p>Border Countries: </p>
            </div>
        </div>
        `

        let img = document.querySelector("img")

        img.src = data[0].flags.svg


        let commonName = document.querySelector("#commonName")

        commonName.innerHTML = data[0].name.common


        let nativeName = document.querySelector("#nativeName")

        nativeName.innerHTML = Object.values(data[0].name.nativeName)
        .map(name => name.common)
        .join(", ");


        let population = document.querySelector("#population")

        population.innerHTML = data[0].population


        let region = document.querySelector("#region")

        region.innerHTML = data[0].region


        let subregion = document.querySelector("#subregion")

        data[0].subregion ? subregion.innerHTML = data[0].subregion : subregion.parentElement.remove()


        let capital = document.querySelector("#capital")

        capital.innerHTML = data[0].capital


        let domain = document.querySelector("#domain")

        domain.innerHTML = data[0].tld


        let currencies = document.querySelector("#currencies")

        currencies.innerHTML = Object.values(data[0].currencies)
        .map(currency => currency.name)


        let languages = document.querySelector("#languages")

        languages.innerHTML = Object.values(data[0].languages)
        .join(", ");

        
        let borders = document.querySelector(".borders")

        data[0].borders ? data[0].borders.forEach(x => {
            borders.innerHTML+=`<button class="go">${x}</button>`
        }) : borders.remove()


        let buttons = document.querySelectorAll(".go")

        

    })


