let timerText = document.createElement('h1');
let body = document.body;
document.body.append(timerText);
timerText.setAttribute('class','countdown');

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

timerText.innerHTML = '10';
body.style.backgroundColor = getRandomColor();
setTimeout(() => {
    timerText.innerHTML = '9';
    body.style.backgroundColor = getRandomColor();
    setTimeout(() => {
        timerText.innerHTML = '8';
        body.style.backgroundColor = getRandomColor();
        setTimeout(() => {
            timerText.innerHTML = '7';
            body.style.backgroundColor = getRandomColor();
            setTimeout(() => {
                timerText.innerHTML = '6';
                body.style.backgroundColor = getRandomColor();
                setTimeout(() => {
                    timerText.innerHTML = '5';
                    body.style.backgroundColor = getRandomColor();
                    setTimeout(() => {
                        timerText.innerHTML = '4';
                        body.style.backgroundColor = getRandomColor();
                        setTimeout(() => {
                            timerText.innerHTML = '3';
                            body.style.backgroundColor = getRandomColor();
                            setTimeout(() => {
                                timerText.innerHTML = '2';
                                body.style.backgroundColor = getRandomColor();
                                setTimeout(() => {
                                    timerText.innerHTML = '1';
                                    body.style.backgroundColor = getRandomColor();
                                    setTimeout(()=> {
                                        body.style.backgroundColor = getRandomColor();
                                        timerText.innerHTML = 'Yaay!';
                                        setTimeout(()=> {
                                            body.style.backgroundColor = getRandomColor();
                                            timerText.innerHTML = 'Happy Independence Day!';
                                            timerText.style.fontSize = '50px';
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)




