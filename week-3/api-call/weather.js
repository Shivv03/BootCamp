//create a request variable.
let request = new XMLHttpRequest();
    
//open the request
request.open('GET','https://restcountries.eu/rest/v2/all',true);

const API_key = 'c408268efc3dbdf97760c4d05926d1eb';

//SEND REQUEST
request.send();

//load response
request.onload = function() {
    
    try {  

        var countries = JSON.parse(this.response);

        if(countries.length < 250) {
            throw new Error("Not Enough data From API"); 
        }

        // 3)  Print the following details name, capital, flag using forEach function
            countries.forEach((country) => {
                console.log(`The Capital of "${country.name}" is "${country.capital}", and it's flag url is ${country.flag}`)
            });


        //  4)  Print the total population of countries using reduce function
            const totalPopulation = countries.reduce( (totalPopulation,country) => 
                (country.population + totalPopulation )
                , 0);
            console.log(`Total Population of the Countries: ${totalPopulation}`);
            

        //  2)  Get all the countries with population of less than 2 lacs using Filter function
            const countriesLessThan2L = countries.filter( (country) =>
                country.population < 200000
            ).map( (country)=>
                country.name
            );
            console.log(`Countries with less than 2lacs population: ${countriesLessThan2L}`);     


        //  1) Get all the countries from Asia continent using Filter function
            const asianCountries  = countries.filter( (country) =>
                country.region === 'Asia'
            ).map( (country) => 
                country.name
            );
            console.log(`Countries in the Asian Continent: ${asianCountries}`);


        // 5)   Print the total population of countries in Asia continent using reduce and filter function
            const asianPopulation  = countries.filter( (country) =>
                country.region === 'Asia'
            ).reduce( (totalPopulation,country) => 
                (country.population + totalPopulation )
                , 0 );
            console.log(`Total Population of the Asian Countries: ${asianPopulation}`);       


        //  6)  Print the country which use US Dollars as currency.
            const countriesWithUSD = countries.filter( (country) =>
                country.currencies[0].code === 'USD'
            ).map( (country)=>
                country.name
            );
            console.log(`Countries using US Dollars as currency: ${countriesWithUSD}`);
        }
        catch(err) {
            document.getElementById('info').innerHTML = "Error Occured! Please check console for logs"
            console.log(err.message);
            console.log(err.stack);
        }
}



