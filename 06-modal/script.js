
const btnOpen = document.querySelector(".modal-btn");
const callModal = document.querySelector("#my-modal");
const btnClose = document.querySelector(".close-btn");

btnOpen.addEventListener("click", function(){
    callModal.style.display = "block";
});

btnClose.addEventListener("click", function(){
    callModal.style.display = "none";
});

window.addEventListener("click", function(e){
    if(e.target == callModal){
        callModal.style.display = "none";
    }
});
