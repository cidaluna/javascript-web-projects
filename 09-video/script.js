
const video = document.querySelector(".video-container");

const controls = document.querySelector(".switch-btn");

controls.addEventListener("click", function(){
    if(!controls.classList.contains("slide")){
        controls.classList.add("slide");
        video.pause();
    }else{
        controls.classList.remove("slide");
        video.play();
    }
});

// preloader

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader");
});