const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const snake = [{ x: 140, y: 150 }, { x: 130, y: 150 }, { x: 120, y: 150 }, { x: 110, y: 150 }];
let xPixelSpeed = 10;
let yPixelSpeed = 0;
let appleX;
let appleY;


let clearCanvas = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "blue";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

}

let drawPieces = (piece) => {
    ctx.fillStyle = "#52FC80";
    ctx.fillRect(piece.x, piece.y, 10, 10);

    ctx.strokeStyle = "black";
    ctx.strokeRect(piece.x, piece.y, 10, 10);

}

let drawSnake = () => {
    snake.forEach(piece => {
        drawPieces(piece);
    });
}

let moveSnake = () => {
    let head = { x: snake[0].x + xPixelSpeed, y: snake[0].y + yPixelSpeed };
    snake.unshift(head);
    const snakeEatApple = snake[0].x === appleX && snake[0].y === appleY;
    if (snakeEatApple) {
        appleNewPosition();
    } else {
        snake.pop();
    }
}

let changeDirection = (event) => {
    const ARROW_UP = 38;
    const ARROW_DOWN = 40;
    const ARROW_LEFT = 37;
    const ARROW_RIGHT = 39;

    const DIRECTION = event.keyCode;

    const GO_UP = yPixelSpeed === -10;
    const GO_DOWN = yPixelSpeed === 10;
    const GO_LEFT = xPixelSpeed === -10;
    const GO_RIGHT = xPixelSpeed === 10;

    if (DIRECTION === ARROW_UP && !GO_DOWN) {
        yPixelSpeed = -10;
        xPixelSpeed = 0;
    }

    if (DIRECTION === ARROW_DOWN && !GO_UP) {
        yPixelSpeed = 10;
        xPixelSpeed = 0;
    }

    if (DIRECTION === ARROW_LEFT && !GO_RIGHT) {
        xPixelSpeed = -10;
        yPixelSpeed = 0;
    }

    if (DIRECTION === ARROW_RIGHT && !GO_LEFT) {
        xPixelSpeed = 10;
        yPixelSpeed = 0;
    }
}

document.addEventListener('keydown', changeDirection);

let appleNewPosition = () => {
    appleX = Math.round((Math.random() * 290) / 10) * 10;
    appleY = Math.round((Math.random() * 290) / 10) * 10;
    snake.forEach(piece => {
        if (piece.x === appleX && piece.y === appleY.y) {
            appleNewPosition();
        }
    });
}

let drawApple = () => {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'darkred';
    ctx.beginPath();
    ctx.arc(appleX + 5, appleY + 5, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

appleNewPosition();
let animateSnake = () => {
    setTimeout(function () {
        clearCanvas();
        drawApple();
        moveSnake();
        drawSnake();
        animateSnake();
    }, 100);
}
animateSnake();