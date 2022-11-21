let value = document.querySelector("#text").value;
let button = document.querySelector("#convert-btn");

button.addEventListener("onclick", () => {
    let raw = value.toUpperCase();
    value = raw;
})