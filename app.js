const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")
const CANVAS_WIDTH = canvas.width = 700
const CANVAS_HEIGHT = canvas.height = 700
ctx.strokeStyle = "#fff"
ctx.lineWidth = 5;
let time = 0;
const position = {
    x: 150,
    y: 350
}

function drawCircle(x, y, radius) {
    ctx.beginPath();
    moveTo(x + radius, y)
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
}

function clearCircle(x, y, radius) {
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.restore();
};

function fill(color) {
    ctx.fillStyle = color;
    ctx.fill();
}

const shiftLength = 200;
function moveTo(x, y) {
    ctx.moveTo(x, y);
}


let wave = [];
const n = 1;

function draw() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    clearCircle(350, 350, 700);
    let radius = 50 * (4 / (n * Math.PI));

    let x = 0;
    let y = 0;
        x += position.x + radius * Math.cos(n * time);
        y += position.y + radius * Math.sin(n * time);
        wave.unshift(y)

        drawCircle(position.x, position.y, radius,);
        ctx.strokeStyle = "white"
        ctx.strokeWidth
        ctx.stroke()

        drawCircle(x, y, 20);
        fill("white")


        ctx.moveTo(position.x, position.y);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "green"
        ctx.stroke()


        ctx.moveTo(x, y);
        ctx.lineTo(position.x + 200, wave[0]);
        ctx.stroke()

    for (let i = 0; i < wave.length; i++) {
        drawCircle(position.x + i + 200, wave[i], 1);
        fill("white")

    }

    if (wave.length > 1000) {
        wave.pop()
    }

    time += 0.1;
    requestAnimationFrame(draw)
}
// draw()








