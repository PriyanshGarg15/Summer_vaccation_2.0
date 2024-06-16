let userpaddle = document.getElementById("userpaddle");
let aipaddle = document.getElementById("aipaddle");
let ball = document.getElementById("ball");
let gamebox = document.getElementById("gamebox");

let wpress = false;
let spress = false;

let userscore = document.getElementById("userscore");
let aiscore = document.getElementById("aiscore");

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
    if (e.key == 'W' || e.key == 'w') {
        wpress = true;
    } else if (e.key == 'S' || e.key == 's') {
        spress = true;
    }
}

function keyUpHandler(e) {
    if (e.key == 'W' || e.key == 'w') {
        wpress = false;
    } else if (e.key == 'S' || e.key == 's') {
        spress = false;
    }
}

let vx = -1;
let vy = -3;
let v = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2));

function reset() {
    ball.style.left = "50%";
    ball.style.top = "50%";
    vx = -1;
    vy = -3;
    v = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2));
}

function checkcollision(activepaddle) {
    let balltop = ball.offsetTop;
    let ballbottom = ball.offsetTop + ball.offsetHeight;
    let ballleft = ball.offsetLeft;
    let ballright = ball.offsetLeft + ball.offsetWidth;

    let paddletop = activepaddle.offsetTop;
    let paddlebottom = activepaddle.offsetTop + activepaddle.offsetHeight;
    let paddleleft = activepaddle.offsetLeft;
    let paddleright = activepaddle.offsetLeft + activepaddle.offsetWidth;

    if (
        ballbottom > paddletop && balltop < paddlebottom &&
        ballright > paddleleft &&
        ballleft < paddleright
    ) {
        return true;
    } else {
        return false;
    }
}

function moveUserPaddle() {
    let paddleTop = userpaddle.offsetTop;
    if (wpress && paddleTop > 0) {
        userpaddle.style.top = paddleTop - 5 + "px";
    }
    if (spress && paddleTop < gamebox.offsetHeight - userpaddle.offsetHeight) {
        userpaddle.style.top = paddleTop + 5 + "px";
    }
}

function gameLoop() {
    if (ball.offsetLeft < 0) {
        aiscore.innerHTML = parseInt(aiscore.innerHTML) + 1;
        reset();
    }
    if (ball.offsetLeft > gamebox.offsetWidth - ball.offsetWidth) {
        userscore.innerHTML = parseInt(userscore.innerHTML) + 1;
        reset();
    }
    if (ball.offsetTop < 0) {
        vy = -vy;
    }
    if (ball.offsetTop > gamebox.offsetHeight - ball.offsetHeight) {
        vy = -vy;
    }

    let paddle = ball.offsetLeft < gamebox.offsetWidth / 2 ? userpaddle : aipaddle;
    let ballcenterY = ball.offsetTop + ball.offsetHeight / 2;
    let paddlecenterY = paddle.offsetTop + paddle.offsetHeight / 2;
    let angle = 0;

    if (checkcollision(paddle)) {
        if (paddle == userpaddle) {
            if (ballcenterY < paddlecenterY) {
                angle = -Math.PI / 4;
            }
            else if (ballcenterY > paddlecenterY) {
                angle = Math.PI / 4;
            }
            else {
                angle = 0;
            }
        }
        else if (paddle == aipaddle) {
            if (ballcenterY < paddlecenterY) {
                angle = -3 * Math.PI / 4;
            }
            else if (ballcenterY > paddlecenterY) {
                angle = 3 * Math.PI / 4;
            }
            else {
                angle = 0;
            }
        }
        v = v + 0.2;
        vx = v * Math.cos(angle);
        vy = v * Math.sin(angle);
    }

    ball.style.left = ball.offsetLeft + vx + "px";
    ball.style.top = ball.offsetTop + vy + "px";

    if (wpress && userpaddle.offsetTop > 0) {
        userpaddle.style.top = userpaddle.offsetTop - 5 + "px";
    }
    if (spress && userpaddle.offsetTop < gamebox.offsetHeight - userpaddle.offsetHeight) {
        userpaddle.style.top = userpaddle.offsetTop + 5 + "px";
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();
