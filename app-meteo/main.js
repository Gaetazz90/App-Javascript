//Chiamata API al sito OpenWeatherMap per ottenere dati sul meteo di qualunque zona e rendere dinamica l'applicazione
//(cioè all'inserimento di una determinata città, mostrerà i dati meteo di quella città)
//Di default non ho impostato nessuna città, quindi al caricamento della pagina non mostra nessun luogo)

// async function checkWeather(){
//     let data = await fetch(apiUrl + `&appid=${apiKey}`).then((response) => response.json()).then((data)=>{
//         return data;
//     })
// }
// checkWeather();


//Cattura elementi necessari al funzionamento dell'app
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
let weather = document.querySelector(".weather");
let error = document.querySelector(".error");

//Chiave API
const apiKey = "e8b5593c1b740ba80a28c82207000098";
//URL dove fare la chiamata API e inserire la relativa KEY
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//Sintassi alternativa per la fetch/chiamata API

async function checkWeather(city){

    //Ottenimento di DATA(response della fetch/chiamata API)
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    //Condizione per gestire l'errore(se viene inserito un nome di città inesistente o non corretto)
    if(response.status == 404)
    {
        error.style.display = "block";
        weather.style.display = "none";
    }
    else
    {
        //Se la chiamata è andata a buon fine e abbiamo ottenuto correttamente la response
        let data = await response.json();
        //Adesso l'oggetto data contiene ( e mostrerà in console) tutte le informazioni relative alla città di riferimento

        //Cambio dinamico delle informazioni(nome città, temperatura, ecc. a seconda del luogo inserito) tramite Data;
        let cityname = document.querySelector(".cityname")
        cityname.innerHTML = data.name;

        let temp = document.querySelector(".temp")
        temp.innerHTML = Math.round(data.main.temp) + "°C";

        let humidity = document.querySelector("#humidity")
        humidity.innerHTML = data.main.humidity + "%";

        let wind = document.querySelector("#wind")
        wind.innerHTML = data.wind.speed + " km/h";

        //Condizioni per il cambio dinamico delle icone meteo(immagini presenti nella cartella media)
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "media/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "media/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "media/rain.png"
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "media/snow.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "media/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "media/mist.png"
        }

        //Mostrare dati solo all'inserimento di una città, quindi di default non mostra niente(solo la searchbox e il searchbtn)
        weather.style.display = "block";
        error.style.display = "none";
        }

}

//Evento che attiva la funzione e al click mostra i dati di una determinata città inserita tramite input
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
