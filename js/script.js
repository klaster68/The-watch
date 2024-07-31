const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x0 = canvas.width / 2;
const y0 = canvas.height / 2;
const R = 150;
const r = 5;

function getRad(grad) {
    return grad * (Math.PI / 180);
}

function drawCircle(radius) {
    for (let i = 0; i < 360; i++) {
        ctx.lineTo(x0 + radius * Math.cos(getRad(i)), y0 + radius * Math.sin(getRad(i)));
    }
}


// Стрелка

let sec = 270;
let min = 270;
let hour = 270;
let count = 60;


setInterval(() => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Цифры на часах
    for(let i = 1; i < 13; i++) {
        ctx.strokeStyle = 'black';
        ctx.font = `bold ${R * 0.2}px sans-serif`;
        let width = ctx.measureText(i).width;
        ctx.fillText(i, ((x0 - width / 2) + (R - R * 0.2) * Math.cos(getRad(270 + i * 30))), ((y0 + width / 2) + (R - R * 0.2) * Math.sin(getRad(270 + i * 30))));
    }

    // Внешний круг
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = "2";
    drawCircle(R);
    ctx.stroke();

    //Центр внешнего круга
    ctx.beginPath();
    drawCircle(r);
    ctx.fill();
    ctx.stroke();

    // Часовая стрелка
  
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = "5";
    ctx.lineTo(x0, y0);
    ctx.lineTo(x0 + (R / 2) * Math.cos(getRad(hour)), y0 + (R / 2) * Math.sin(getRad(hour)));
    ctx.stroke();

    // Минутная стрелка
    if (min == 630) {
        min = 270;
    }
    if (sec % 630 == 0) {
        min = min + 6;
        hour = hour + 0.5;
    }
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = "3";
    ctx.lineTo(x0, y0);
    ctx.lineTo(x0 + (R * (2 / 3)) * Math.cos(getRad(min)), y0 + (R * (2 / 3)) * Math.sin(getRad(min)));
    ctx.stroke();

    // Секундная стрелка
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = "1";
    ctx.lineTo(x0, y0);
    ctx.lineTo(x0 + R * Math.cos(getRad(sec)), y0 + R * Math.sin(getRad(sec)));
    ctx.stroke();

    




    if (sec == 630) {
        sec = 270;
    }
    sec += 6;


},100);


console.log(x0, R);