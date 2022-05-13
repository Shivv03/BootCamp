var countryCardObj;
var columns = [];
const API_key = 'c408268efc3dbdf97760c4d05926d1eb';

const createElement = (element , classes , parentElement) =>{
    let createdElement = document.createElement(element);
    createdElement.setAttribute('class',classes);
    parentElement.append(createdElement);
    return createdElement;
}


let container = createElement('div', 'container-lg', document.body);
container.id = "container";
let infoText = createElement('p', 'text-center d-none mt-1 fs-4', container);
let row = createElement('div', 'row', container);


const createWeatherCard = (country) =>  {
    let cardContainer = createElement('div', 'col-lg-4 col-12 px-4 py-2', row);
    let card = createElement('div', 'card border-2 border-dark rounded-3 bg-custom', cardContainer);
        let cardHeader = createElement('div', 'card-header bg-dark text-white', card);
            let cardHeaderContent = createElement('h5', 'card-title text-center align-items-center', cardHeader);
            cardHeaderContent.innerHTML = `${country.name} (${country.alpha3Code})`;
        let cardBody = createElement('div', 'card-body d-flex flex-column align-items-center justify-content-center', card);   
            let countryInfo = createElement('div', 'countryInfo d-flex flex-column align-items-center justify-content-center m-1', cardBody);
                let flagImg = createElement('img', 'image', countryInfo);
                flagImg.src = country.flag;
                flagImg.alt = "display-picture";
                flagImg.setAttribute('class','flag m-1')
                let countryCapital = createElement('p', 'card-text text-white m-0', countryInfo);
                    countryCapital.innerHTML = `Capital: ${country.capital}`
                let countryRegion = createElement('p', 'card-text text-white m-0', countryInfo);
                    countryRegion.innerHTML = `<i class="fas fa-globe-africa"></i> ${country.region}`
                let countryCode = createElement('p', 'card-text text-white m-0', countryInfo);
                    countryCode.innerHTML = `<i class="fas fa-users"></i> ${country.population} `
                let btn = createElement('button', '', countryInfo);
                    btn.setAttribute("onclick",`displayWeather(${country.latlng},event)`)
                    btn.setAttribute('class','btn btn-primary m-2')
                    btn.innerHTML = 'Click for Weather';
            let weatherInfo = createElement('div', 'weatherInfo d-flex flex-column align-items-center justify-content-center d-none', cardBody);
            weatherInfo.innerHTML = `<div class="loader d-flex justify-content-center m-2">
                                                <div class="spinner-border text-light" style="width: 4rem; height: 4rem;" role="loader">
                                                        <span class="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                            <div class="weatherInfoContent "></div>`
            let btn2 = createElement('button', 'd-none', weatherInfo);
            btn2.setAttribute('onclick', `resetState(event)`)
            btn2.setAttribute('class','btn btn-secondary m-1 p-1')
            btn2.innerHTML = 'Reset';

    countryCardObj = { country : country.name, code: country.alpha3Code , card: cardContainer}
    columns.push(countryCardObj);
}

fetch('https://restcountries.com/v2/all')
.then((resp)=> {
    return resp.json()
})
.then((data)=> {
    data.forEach(country => {
        createWeatherCard(country)
    })
})

const search = document.getElementById('search');
search.addEventListener("keyup", function(){
    searchbyCountry(this.value);
})
search.addEventListener("change", function(){
    searchbyCountry(this.value);
})

const searchbyCountry = (searchText) => {
    let resultCount = 0;
    columns.forEach(column => {
        if(column.country.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
            column.code.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                column.card.classList.remove("d-none");
                resultCount++;
        } else {
            column.card.classList.add("d-none");   
        }
    })
    if(resultCount > 0 && searchText !== '') {
        infoText.innerHTML = `${resultCount} Countries Matched`;
        infoText.classList.remove("d-none");
        infoText.classList.add("text-secondary");
        infoText.classList.remove("text-danger");
    } else if(resultCount == 0 && searchText !== ''){
        infoText.innerHTML = `No Records Found`;
        infoText.classList.remove("d-none");
        infoText.classList.remove("text-info");
        infoText.classList.add("text-danger");
    } else {
        infoText.classList.add("d-none");
    }

}

const displayWeather = (lat,long,event) => {
    let card = event.path.find(elem => elem.classList && elem.classList.contains("card"))
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}&units=metric`)
    .then(resp=> resp.json())
    .then(data=> {
        let countryInfo = card.querySelector('.countryInfo');
        countryInfo.classList.add('d-none')
        let weatherInfo = card.querySelector('.weatherInfo');
            let weatherInfoLoader = weatherInfo.querySelector('.loader');  
            weatherInfoLoader.classList.add('d-none');
            let weatherInfoContent =  weatherInfo.querySelector('.weatherInfoContent');
            let temp = createElement('h5', 'weather-icon card-text text-white text-center m-1', weatherInfoContent);
                temp.innerHTML = `<image src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></image>
                                <span class='fs-2 fw-bold'>${data.main.temp}</span><sup>°C</sup>`;
            let tempsubSection = createElement('div', 'd-flex align-content-between', weatherInfoContent);
            let tempMin = createElement('p', 'card-text text-white mr-2 my-1', tempsubSection);
                tempMin.innerHTML = `<em>Min</em> : ${data.main.temp_min}<sup>°C</sup>`;
            let tempMax = createElement('p', 'card-text text-white ml-4 my-1', tempsubSection);
                tempMax.innerHTML = `<em>Max</em> : ${data.main.temp_max}<sup>°C</sup>`;
            let feelsLike = createElement('p', 'card-text text-white m-0 text-center', weatherInfoContent);
                feelsLike.innerHTML = `<em>Feels Like</em> :  ${data.main.feels_like}<sup>°C</sup>`;
            let humidity = createElement('p', 'card-text text-white m-0 text-center', weatherInfoContent);
                humidity.innerHTML = `<em>Humidity</em> : ${data.main.humidity}%`;
            let pressure = createElement('p', 'card-text text-white m-0 text-center', weatherInfoContent);
                pressure.innerHTML = `<em>Pressure</em> :  ${data.main.pressure} hPa`;   
        weatherInfo.classList.remove('d-none')
    })
};

const resetState = (event) => {
    let card = event.path.find(elem => elem.classList && elem.classList.contains("card"))
    let countryInfo = card.querySelector('.countryInfo');
    countryInfo.classList.remove('d-none')
    let weatherInfo = card.querySelector('.weatherInfo');
    weatherInfo.classList.add('d-none')
    let weatherInfoLoader =  weatherInfo.querySelector('.loader');
    weatherInfoLoader.classList.remove('d-none')
    let weatherInfoContent =   weatherInfo.querySelector('.weatherInfoContent');
    weatherInfoContent.innerHTML = '';
}






