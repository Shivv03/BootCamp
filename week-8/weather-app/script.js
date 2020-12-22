var countryCardObj;
var columns = [];

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
    let cardContainer = createElement('div', 'col-lg-4 col-12 px-5 py-2', row);
    let card = createElement('div', 'card border-2 border-dark rounded-3 bg-custom', cardContainer);
    let cardHeader = createElement('div', 'card-header bg-dark text-white', card);
    let cardHeaderContent = createElement('h5', 'card-title text-center', cardHeader);
    cardHeaderContent.innerHTML = country.name;
    let cardBody = createElement('div', 'card-body d-flex flex-column align-items-center justify-content-center', card);
    let flagImg = createElement('img', 'image', cardBody);
    flagImg.src = country.flag;
    flagImg.alt = "display-picture";
    flagImg.setAttribute('class','flag m-1')
    let countryCapital = createElement('p', 'card-text text-white m-0', cardBody);
    countryCapital.innerHTML = `Capital: ${country.capital}`
    let countryRegion = createElement('p', 'card-text text-white m-0', cardBody);
    countryRegion.innerHTML = `Region: ${country.region}`
    let countryCode = createElement('p', 'card-text text-white m-0', cardBody);
    countryCode.innerHTML = `Country Code: ${country.alpha3Code}`
    let btn = createElement('input', 'image', cardBody);
    btn.type = 'button'
    btn.setAttribute('class','btn btn-primary m-1')
    btn.value = 'Click for Weather';
    countryCardObj = { country : country.name, code: country.alpha3Code , card: cardContainer}
    columns.push(countryCardObj);
}

fetch('https://restcountries.eu/rest/v2/all')
.then((resp)=> {
    return resp.json()
})
.then((data)=> {
    data.forEach(country => {
        if(country.name == 'Afghanistan123'){
            console.log(country)
        }  
        createWeatherCard(country)
    })
})

const search = document.getElementById('search');
console.log(search);
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






