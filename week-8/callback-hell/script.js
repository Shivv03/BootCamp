let paragraph = document.createElement('p');
let body = document.body;
document.body.append(paragraph);
paragraph.setAttribute('class','countdown');

    paragraph.innerHTML = '10';
    body.style.backgroundColor = getRandomColor();
    setTimeout(() => {
        paragraph.innerHTML = '9';
        body.style.backgroundColor = getRandomColor();
        setTimeout(() => {
            paragraph.innerHTML = '8';
            body.style.backgroundColor = getRandomColor();
            setTimeout(() => {
                paragraph.innerHTML = '7';
                body.style.backgroundColor = getRandomColor();
                setTimeout(() => {
                    paragraph.innerHTML = '6';
                    body.style.backgroundColor = getRandomColor();
                    setTimeout(() => {
                        paragraph.innerHTML = '5';
                        body.style.backgroundColor = getRandomColor();
                        setTimeout(() => {
                            paragraph.innerHTML = '4';
                            body.style.backgroundColor = getRandomColor();
                            setTimeout(() => {
                                paragraph.innerHTML = '3';
                                body.style.backgroundColor = getRandomColor();
                                setTimeout(() => {
                                    paragraph.innerHTML = '2';
                                    body.style.backgroundColor = getRandomColor();
                                    setTimeout(() => {
                                        paragraph.innerHTML = '1';
                                        body.style.backgroundColor = getRandomColor();
                                        setTimeout(()=> {
                                            body.style.backgroundColor = getRandomColor();
                                            paragraph.innerHTML = 'Happy Independence Day!';
                                            paragraph.style.fontWeight = 'bold';
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


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

startCountDown(countdownTimer9);

