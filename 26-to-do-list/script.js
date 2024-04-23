const taskInput = document.querySelector(".task-input input"),
taskBox = document.querySelector(".task-box");

// getting localStorage todo-list
let todos = JSON.parse(localStorage.getItem("todo-list"));

function showTodo(){
    let li = "";
    todos.forEach((todo, id) => {
        console.log(id, todo);
        li += `
        <li class="task">
            <label for="${id}">
                <input type="checkbox" id="${id}">
                <p>${todo.name}</p>
            </label>
            <div class="settings">
                <i class="fa-solid fa-ellipsis"></i>
                <ul class="task-menu">
                    <li><i class="fa-regular fa-pen-to-square"></i>Edit</li>
                    <li><i class="fa-solid fa-trash-can"></i>Delete</li>
                </ul>
            </div>
        </li>
        `;
    });
    taskBox.innerHTML = li;
}
showTodo();

taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if(e.key == "Enter" && userTask){
        //console.log(userTask);
        if(!todos){
            // if to-dos isn't exist, pass an empty array to todos
            todos = [];
        }
        taskInput.value = "";
        let taskInfo = {
            name: userTask,
            status: "pending"
        };
        todos.push(taskInfo); // adding new task to todos
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo();
    }
});
