//console.log("HI!");

window.addEventListener("DOMContentLoaded", () =>{

    const button = document.querySelector("button");

    const fetchCountry= async () => {

        const response = await fetch("https://restcountries.com/v3.1/name/peru");
        const jsonData = await response.json();
        countryButton.src = jsonData.url;

        

    }
    button.addEventListener("click",fetchCountry);
})