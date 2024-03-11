const form = document.querySelector('.form')
const locationDetails = document.querySelector('.locationDetails')


function getValue() { 

    // Get the input element by its ID 
    const inputField = document.getElementById("inputText"); 

    // Get the value of the input field 
    const value = inputField.value; 
    return value;
} 

form.addEventListener('submit', e => {
    e.preventDefault()
    getZipInfo(getValue())
    console.log()
})

const URL = "https://api.zippopotam.us/us/"

async function getZipInfo(userInput) {
    const response = await fetch(URL+userInput)
    const info = await response.json()
    locationDetails.textContent = JSON.stringify(info).split(",");
    console.log(info)
}

