//Minimum//

let car = {
    maker : 'BMW',
    model : 'X5',
    graduation : 2022,
    avarageSpeed : 120,
    fuelTank : 80,
    avarageFuelConsuption : 10,
    driver : 'Zakhar'
}

for (let param in car) {
    console.log(`${param} = ${car[param]}`);
}

function newDriver () {
    let carman = prompt('Введіть нового водія');
    car.driver = carman;
}

function refuel () {
    alert('Підзаправся!');
}

function timeCalc(s) {
    let t = 0;
    let fuel = car.fuelBag;
    do {
        fuel -= car.averageFuel * 0.12;
        if (fuel <= 0) {
            refuel();
            fuel = 90; 
        }
        s -= car.averageSpeed;
        if (s < 0) {
            break;
        }
        t++;
        if (t % 4 == 0) {
            t++;
            newDriver();
        }
    } while (t > 0);

    console.log(t);
} 

//Norma//

let data = {
    sec : 10,
    min : 50,
    hours : 5
}

function showResults () {
    for(let result in data) {
        console.log(`${result} = ${data[result]}`);
    }
}

function updateSeconds (sec) {
    data.sec = data.sec + (sec % 60);
    data.min = Math.trunc(data.min + (sec / 60));
    data.hours = Math.trunc(data.hours + (sec / 3600));
    if (data.sec >= 60) {
        data.min++;
        data.sec = data.sec - 60;
    }
    if (data.min >= 60) {
        data.hours++;
        data.min = data.min - 60;
    }
}

function updateMinutes (min) {
    data.min = data.min + (min % 60);
    data.hours = Math.trunc(data.hours + (min / 60));
    if (data.min >= 60) {
        data.hours++;
        data.min = data.min - 60;
    }
    if (data.hours > 24) {
        data.hours = data.hours - 24;
    }
}

function updateHours (hours) {
    data.hours = data.hours + (hours % 24);
    if (data.hours > 24 ) {
        data.hours = data.hours - 24;
    }
}

showResults();
