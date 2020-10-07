const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const snake = [{ x: 150, y: 100 }, { x: 140, y: 100 }, { x: 130, y: 100 }, { x: 120, y: 100 }];
const xPixelSpeed = 10;
const yPixelSpeed = -10;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.strokeStyle = "blue";
ctx.strokeRect(0, 0, canvas.width, canvas.height);

let clearCanvas = () {

}

let animateSnake = () {

}

let drawPieces = (piece) => {
    ctx.fillStyle = "yellow";
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
    let head = { x: snake[0].x + pixelSpeed, y: snake[0].y + yPixelSpeed };
    snake.unshift(head);
    snake.pop();
}

moveSnake();
drawSnake();
