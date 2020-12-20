let paragraph = document.createElement('p');
let body = document.body;
document.body.append(paragraph);
paragraph.setAttribute('class','countdown');

const startCountDown = (cb) => {
    setTimeout(function() {
        paragraph.innerHTML = '10';
        body.style.backgroundColor = getRandomColor();
        cb(countdownTimer8);
    },1000)
}

const countdownTimer9 = (cb) => {
    setTimeout(function() {
        paragraph.innerHTML = '9';
        body.style.backgroundColor = getRandomColor();
        cb(countdownTimer7);
    },1000)
}

const countdownTimer8 = (cb) => {
    setTimeout(function() {
        paragraph.innerHTML = '8';
        body.style.backgroundColor = getRandomColor();
        cb(countdownTimer6)
    },1000)
}

const countdownTimer7 = (cb) => {
    setTimeout(function() {
        paragraph.innerHTML = '7';
        body.style.backgroundColor = getRandomColor();
        cb(countdownTimer5)
    },1000)
}

const countdownTimer6 = (cb) => {
    setTimeout(function() {
        paragraph.innerHTML = '6';
        body.style.backgroundColor = getRandomColor();
        cb(countdownTimer4)
    },1000)
}

const countdownTimer5 = (cb) => {
    setTimeout(function() {
        paragraph.innerHTML = '5';
        body.style.backgroundColor = getRandomColor();
        cb(countdownTimer3)
    },1000)
}

const countdownTimer4 = (cb) => {
    setTimeout(function() {
        paragraph.innerHTML = '4';
        body.style.backgroundColor = getRandomColor();
        cb(countdownTimer2)
    },1000)
}

const countdownTimer3 = (cb) => {
    setTimeout(function() {
        paragraph.innerHTML = '3';
        body.style.backgroundColor = getRandomColor();
        cb(countdownTimer1)
    },1000)
}

const countdownTimer2 = (cb) => {
    setTimeout(function() {
        paragraph.innerHTML = '2';
        body.style.backgroundColor = getRandomColor();
        cb(displayWishes)
    },1000)
}

const countdownTimer1 = (cb) => {
    setTimeout(function() {
        paragraph.innerHTML = '1';
        body.style.backgroundColor = getRandomColor();
        cb()
    },1000)
}

const displayWishes = () => {
    setTimeout(function() {
        body.style.backgroundColor = getRandomColor();
        paragraph.innerHTML = 'Happy Independence Day!';
        paragraph.style.fontWeight = 'bold';
    },1000)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

startCountDown(countdownTimer9);

