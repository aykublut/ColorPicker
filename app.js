const input = document.querySelector("input");
const button = document.querySelector("button");
const body = document.querySelector("body");
const container = document.querySelector(".container");


body.style.backgroundColor = input.value;



input.addEventListener("input", exe);
container.addEventListener("mouseover", mouseoverExe);
container.addEventListener("mouseout", mouseoutExe);

function exe() {
    const inputValue = input.value.trim();
    console.log(inputValue);
    body.style.backgroundColor = inputValue;
}

function mouseoverExe() {
    container.style.backgroundColor = input.value.trim();
}

function mouseoutExe() {
    container.style.backgroundColor = "#f0ffff";
}
