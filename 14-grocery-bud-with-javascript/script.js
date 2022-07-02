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

// submit form
form.addEventListener("submit", addItem);

//clear items
clearBtn.addEventListener("click", clearItems);

function addItem(e){
    e.preventDefault();
    //console.log(grocery.value);
    const value = grocery.value;
    const id = new Date().getTime().toString();
    //console.log(id);

    if(value && !editFlag){
        //console.log("add item to the list");
        const element = document.createElement('article');
        // add class
        element.classList.add('grocery-item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
        <p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
        `;

        // delete 
        const deleteBtn = document.querySelector(".delete-btn");
        const editBtn = document.querySelector(".edit-btn");
        deleteBtn.addEventListener("click", deleteItem);
        editBtn.addEventListener("click", editItem);
        // append child
        list.appendChild(element);
        // display alert
        displayAlert('item added to the list', 'sucess');
        // show container
        container.classList.add('show-container');
        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();
    }else if(value && editFlag){
        console.log("editing");
    }else{
        displayAlert("please enter value", "danger")
    }
}

function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    },1500)
}

// clear items
function clearItems(){
    const items = document.querySelectorAll(".grocery-item");

    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        });
    }

    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    // localStorage.removeItem("list");
}

// delete function
function deleteItem(e){
    // console.log("item deleted");
    const element = e.currentTarget.parentElement.parentElement;
    //list.removeChild(element);
    const id = element.dataset.id;
    if(list.children.length === 0){
        container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");
    setBackToDefault();

    //remove from local storage
    // removeFromLocalStorage(id);
}

// edit function
function editItem(){
    console.log("item edited");
}

// set back to default
function setBackToDefault(){
    // console.log(" set back to default.");
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}

// local storage
function addToLocalStorage(id, value){
    console.log("added to local storage");
}

function removeFromLocalStorage(id){

}

// setup items
