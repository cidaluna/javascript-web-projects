//It is possible use the colors'name instead code hexadecimal
//const colors = ["green", "red", "brown","purple", "white", "gray"];
const colors = ["#f9aaaa", "#cccc55", "#d95542", "#b1b1b1",
"#aa99f1", "#c6bc55", "#31d9d9", "#555444"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}