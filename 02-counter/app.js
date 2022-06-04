
var num = 0;
const zero = document.querySelector("#zero");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (item) {
    item.addEventListener("click", (event) => {
        //console.log(event.currentTarget.classList); //capture which was clicked and which class it is.
        const styles = event.currentTarget.classList;
        if(styles.contains("decrease")){
            num--;
        }else if(styles.contains("reset")){
            num = 0;
        }else{
            num++;
        }
        zero.textContent = num;
        if(num > 0){
            zero.style.color = "green";
        }
    });
});