
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
   // console.log(links.classList);
   // console.log(links.classList.contains("home")); // return false because home isn't class name
   // console.log(links.classList.contains("links")); // return true because links is a class name

   /* Instead of using IF/ELSE we can use toggle to on and off navbar links
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links");
    }else{
        links.classList.add("show-links");
    }
    */
   links.classList.toggle("show-links");

});

const btnInfo = document.querySelector(".btn-info");
const showMe = document.querySelector(".showMe");

btnInfo.addEventListener("click", function (){
    showMe.classList.toggle("showMe");
});