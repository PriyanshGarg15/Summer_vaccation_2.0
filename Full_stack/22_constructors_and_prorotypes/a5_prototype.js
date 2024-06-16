let userpaddle = document.getElementById("userpaddle");
let aipaddle = document.getElementById("aipaddle");
let ball = document.getElementById("ball");
let gamebox = document.getElementById("gamebox");

let wpress = false;
let spress = false;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
    if (e.key == 'W' || e.key == 'w') {
        wpress = true;
        console.log("w pressed");
    } else if (e.key == 'S' || e.key == 's') {
        spress = true;
        console.log("s pressed");
    }
}

function keyUpHandler(e) {  
    if (e.key == 'W' || e.key == 'w') {
        wpress = false;
        console.log("w released");
    } else if (e.key == 'S' || e.key == 's') {
        spress = false;
        console.log("s released");
    }
}
