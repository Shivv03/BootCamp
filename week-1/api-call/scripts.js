//create a request variable.
var request = new XMLHttpRequest();

//open the request
request.open('GET','https://restcountries.eu/rest/v2/all',true);


//SEND REQUEST
request.send();

//load response
request.onload = function() {

    try {
        var countries = JSON.parse(this.response);
        if(countries.length < 250) {
            throw new SyntaxError('incomplete data from API')
        }
        for(var country of countries){
            console.log(`${country['name']}'s flag URL : ${country['flag']}`);
        }
    } catch(err) {
        alert(err.message)
    }
    
}