// CONSTANTS AND VARIABLES

const apiKey = 'ad056b2a09b0aad0e6f7c05b9d9b3aae' // DON'T PUSH API KEY TO GITHUB
const baseURL = 'https://api.openweathermap.org/geo/1.0/direct?'

// below I added ID's because my url wasn't reading the second and third input text fields. Therefore, it wasn't grabbing state and country code.
const $input1 = $("#first")
const $input2 = $("#second")
const $input3 = $("#third")

let cityName, stateCode, countryCode

$("form").on("submit", getWeather)

//function that does weather search
function getWeather(event){
  event.preventDefault()
    cityName = $input1.val()
    stateCode = $input2.val()
    countryCode = $input3.val()
    const url = `${baseURL}q=${cityName},${stateCode},${countryCode}&limit=5&appid=${apiKey}`
    $.ajax(url)
    .then((results) => {
      weather = results
      console.log(weather)
    // render book data
    })
}