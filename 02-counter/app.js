
let num = 0;
const zero = document.querySelector("#zero");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (item) {
    item.addEventListener("click", (event) => {
        console.log(event.currentTarget);
    })
});