const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalID;


const trafficLight = (event) => {
    stopInterval();
    let choose = event.target.id;
    turnOn[choose]();
}

// A linha abaixo é uma arrow function, 
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changecolor = () => {
    const colors = ['red', 'green', 'yellow'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopInterval = () => {
    clearInterval(intervalID);
}

const turnOn = {
    'red': () => img.src = '/img/red.jpg',
    'yellow': () => img.src = '/img/yellow.jpg',
    'green': () => img.src = '/img/green.jpg',
    'automatic': () => intervalID = setInterval(changecolor, 1000)
}


buttons.addEventListener('click', trafficLight);

