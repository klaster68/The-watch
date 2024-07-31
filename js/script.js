const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// const x0 = canvas.width / 2;
// const y0 = canvas.height / 2;
// const R = 150;
// const r = 5;

function getRad(grad) {
    return grad * (Math.PI / 180);
}

class Watch {
    constructor(radius, context) {

        this.x0 = canvas.width / 2;
        this.y0 = canvas.height / 2;
        this.R = radius;
        this.r = 5;
        this.ctx = context;

        this.sec = 270;
        this.min = 270;
        this.hour = 270;
    }

    getRad(grad) {
        return grad * (Math.PI / 180);
    }

    drawCircle(radius = 150) {
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        for (let i = 0; i < 360; i++) {
            ctx.lineTo(this.x0 + radius * Math.cos(this.getRad(i)), this.y0 + radius * Math.sin(this.getRad(i)));
        }
        ctx.stroke();
    };

    drawNum() {
        // Цифры на часах
        for (let i = 1; i < 13; i++) {
            ctx.strokeStyle = 'black';
            ctx.font = `bold ${this.R * 0.2}px sans-serif`;
            let width = ctx.measureText(i).width;
            ctx.fillText(i, ((this.x0 - width / 2) + (this.R - this.R * 0.2) * Math.cos(this.getRad(270 + i * 30))), ((this.y0 + width / 2) + (this.R - this.R * 0.2) * Math.sin(this.getRad(270 + i * 30))));
        }
    };

    // drawCircleOut() {
    //     ctx.beginPath();
    //     ctx.strokeStyle = 'black';
    //     ctx.lineWidth = "2";
    //     drawCircle(R);
    //     ctx.stroke();
    // }

    drawCircleCenter(radius = 5) {
        ctx.beginPath();
        this.drawCircle(5);
        ctx.fill();
        ctx.stroke();
    }

    drawHourArrow() {
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = "5";
        ctx.lineTo(this.x0, this.y0);
        ctx.lineTo(this.x0 + (this.R / 2) * Math.cos(this.getRad(this.hour)), this.y0 + (this.R / 2) * Math.sin(this.getRad(this.hour)));
        ctx.stroke();
    }

    drawMinArrow() {
        if (this.min == 630) {
            this.min = 270;
        }
        if (this.sec % 630 == 0) {
            this.min = this.min + 6;
            this.hour = this.hour + 0.5;
        }
        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = "3";
        ctx.lineTo(this.x0, this.y0);
        ctx.lineTo(this.x0 + (this.R * (2 / 3)) * Math.cos(this.getRad(this.min)), this.y0 + (this.R * (2 / 3)) * Math.sin(this.getRad(this.min)));
        ctx.stroke();
    }

    drawSecArrow() {
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = "1";
        ctx.lineTo(this.x0, this.y0);
        ctx.lineTo(this.x0 + this.R * Math.cos(this.getRad(this.sec)), this.y0 + this.R * Math.sin(this.getRad(this.sec)));
        ctx.stroke();

        if (this.sec == 630) {
            this.sec = 270;
        }
        this.sec += 6;
    }

}

const watch = new Watch(150, ctx);

setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    watch.drawCircle();
    watch.drawCircleCenter();
    watch.drawSecArrow();
    watch.drawMinArrow();
    watch.drawHourArrow();
    watch.drawNum();
}, 1000);

// function drawCircle(radius) {
//     for (let i = 0; i < 360; i++) {
//         ctx.lineTo(x0 + radius * Math.cos(getRad(i)), y0 + radius * Math.sin(getRad(i)));
//     }
// }


// Стрелка

// let sec = 270;
// let min = 270;
// let hour = 270;


// setInterval(() => {

    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Цифры на часах
    // for (let i = 1; i < 13; i++) {
    //     ctx.strokeStyle = 'black';
    //     ctx.font = `bold ${R * 0.2}px sans-serif`;
    //     let width = ctx.measureText(i).width;
    //     ctx.fillText(i, ((x0 - width / 2) + (R - R * 0.2) * Math.cos(getRad(270 + i * 30))), ((y0 + width / 2) + (R - R * 0.2) * Math.sin(getRad(270 + i * 30))));
    // }

    // Внешний круг
    // ctx.beginPath();
    // ctx.strokeStyle = 'black';
    // ctx.lineWidth = "2";
    // drawCircle(R);
    // ctx.stroke();

    //Центр внешнего круга
    // ctx.beginPath();
    // drawCircle(r);
    // ctx.fill();
    // ctx.stroke();

    // Часовая стрелка

    // ctx.beginPath();
    // ctx.strokeStyle = 'black';
    // ctx.lineWidth = "5";
    // ctx.lineTo(x0, y0);
    // ctx.lineTo(x0 + (R / 2) * Math.cos(getRad(hour)), y0 + (R / 2) * Math.sin(getRad(hour)));
    // ctx.stroke();

    // Минутная стрелка
    // if (min == 630) {
    //     min = 270;
    // }
    // if (sec % 630 == 0) {
    //     min = min + 6;
    //     hour = hour + 0.5;
    // }
    // ctx.beginPath();
    // ctx.strokeStyle = 'blue';
    // ctx.lineWidth = "3";
    // ctx.lineTo(x0, y0);
    // ctx.lineTo(x0 + (R * (2 / 3)) * Math.cos(getRad(min)), y0 + (R * (2 / 3)) * Math.sin(getRad(min)));
    // ctx.stroke();

    // Секундная стрелка
    // ctx.beginPath();
    // ctx.strokeStyle = 'red';
    // ctx.lineWidth = "1";
    // ctx.lineTo(x0, y0);
    // ctx.lineTo(x0 + R * Math.cos(getRad(sec)), y0 + R * Math.sin(getRad(sec)));
    // ctx.stroke();






    // if (sec == 630) {
    //     sec = 270;
    // }
    // sec += 6;


// }, 100);