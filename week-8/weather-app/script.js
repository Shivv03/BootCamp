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
            let flagImg = createElement('img', 'image', cardBody);
                flagImg.src = country.flag;
                flagImg.alt = "display-picture";
                flagImg.setAttribute('class','flag m-1')
            let countryInfo = createElement('div', 'd-flex flex-column align-items-center justify-content-center', cardBody);
                let countryCapital = createElement('p', 'card-text text-white m-0', countryInfo);
                    countryCapital.innerHTML = `Capital: ${country.capital}`
                let countryRegion = createElement('p', 'card-text text-white m-0', countryInfo);
                    countryRegion.innerHTML = `Region: ${country.region}`
                let countryCode = createElement('p', 'card-text text-white m-0', countryInfo);
                    countryCode.innerHTML = `Population: ${country.population}`
                let btn = createElement('input', '', countryInfo);
                    btn.type = 'button'
                    btn.setAttribute("onclick",`displayWeather(${country.latlng},event)`)
                    btn.setAttribute('class','btn btn-primary m-1')
                    btn.value = 'Click for Weather';
            let weatherInfo = createElement('div', 'd-flex flex-column align-items-center justify-content-center d-none', cardBody);
            weatherInfo.innerHTML = `<div class="loader d-flex justify-content-center m-2">
                                                <div class="spinner-border text-light" style="width: 4rem; height: 4rem;" role="loader">
                                                        <span class="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                            <div class="weatherInfoContent "></div>`
            let btn2 = createElement('button', 'd-none', weatherInfo);
            btn2.setAttribute('onclick', `resetState(event)`)
            btn2.setAttribute('class','btn btn-secondary m-1')
            btn2.innerHTML = 'Reset';

    countryCardObj = { country : country.name, code: country.alpha3Code , card: cardContainer}
    columns.push(countryCardObj);
}

fetch('https://restcountries.eu/rest/v2/all')
.then((resp)=> {
    return resp.json()
})
.then((data)=> {
    data.forEach(country => {
        if(country.name == 'Afghanistan'){
            console.log(country)
        }  
        createWeatherCard(country)
    })
})

const search = document.getElementById('search');
search.addEventListener("keyup", function(){
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
        let countryInfo = card.children[1].children[1];
        countryInfo.classList.add('d-none')
        let weatherInfo = card.children[1].children[2];
            weatherInfo.children[0].classList.add('d-none')
            let weatherInfoContent =  weatherInfo.children[1];
            let temp = createElement('h5', 'card-text text-white text-center mt-1', weatherInfoContent);
            temp.innerHTML = `<i class="far fa-cloud"></i> ${data.main.temp}<sup>°C</sup>`;
            let feelsLike = createElement('p', 'card-text text-white m-0 text-center', weatherInfoContent);
            feelsLike.innerHTML = `Feels Like :  ${data.main.feels_like}<sup>°C</sup>`;
            let subSection = createElement('div', 'd-flex align-content-between', weatherInfoContent);
                let tempMin = createElement('p', 'card-text text-white mx-2 my-0', subSection);
                    tempMin.innerHTML = `Min : ${data.main.temp_min}<sup>°C</sup>`;
                let tempMax = createElement('p', 'card-text text-white mx-2 my-0', subSection);
                    tempMax.innerHTML = `Max : ${data.main.temp_max}<sup>°C</sup>`;
            
        weatherInfo.classList.remove('d-none')
    })
};

const resetState = (event) => {
    let card = event.path.find(elem => elem.classList && elem.classList.contains("card"))
    let countryInfo = card.children[1].children[1];
    countryInfo.classList.remove('d-none')
    let weatherInfo = card.children[1].children[2];
    weatherInfo.children[0].classList.remove('d-none')
    weatherInfo.classList.add('d-none')
    weatherInfo.children[1].innerHTML = '';
}






