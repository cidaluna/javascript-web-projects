const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery"); // input value
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clearBtn");

let editElement;
let editFlag = false;
let editID = "";

form.addEventListener("submit", addItem);

function addItem(e){
    e.preventDefault();
    //console.log(grocery.value);
    const value = grocery.value;
    const id = new Date().getTime().toString();
    //console.log(id);

    if(value && !editFlag){
        console.log("add item to the list");
    }else if(value && editFlag){
        console.log("editing");
    }else{
        displayAlert("please enter value", "danger")
    }
}

function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
}