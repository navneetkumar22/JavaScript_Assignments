
function ranNum() {
    let number = "0123456789ACDEF";
    let num = "#";

    for (let i = 0; i < 6; i++) {
        num = num + number[Math.floor(Math.random()*16)];
    }
    return num;
}

let button = document.querySelector("#button");

button.addEventListener("click", changeColor => {
    let canvas = document.querySelector("#canvas");
    canvas.style.backgroundColor = ranNum();
})

