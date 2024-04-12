const apikey="3485b9f05b29b3671399a09f02f15c8b"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const wicon = document.querySelector(".wicon")

async function chwh(city){
    const resp = await fetch(apiurl + city + `&appid=${apikey}`)
    var data = await resp.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".place").innerHTML = data.sys.country
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%"
    document.querySelector(".wind").innerHTML = data.wind.speed+"Km/hr"

    if(data.weather[0].main == "clouds"){
        wicon.src="./images/cloud.png"
    }
    else if (data.weather[0].main == "Clear"){
        wicon.src="./images/clear.png"
    }
    else if (data.weather[0].main == "Rain"){
        wicon.src="./images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        wicon.src="./images/drizzle.png"
    }
    else {
        wicon.src="./images/mist.png"
    }


}



searchbtn.addEventListener('click',()=>{
    chwh(searchbox.value)
    searchbox.value=""
})

searchbox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        chwh(searchbox.value)
        searchbox.value=""
    }
})





