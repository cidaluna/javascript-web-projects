
const btns = document.querySelectorAll(".question-btn");
const text = document.querySelector(".question-text");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    });
});


