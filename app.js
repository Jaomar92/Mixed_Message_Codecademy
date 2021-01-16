//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);




// functions


function addTodo(event){
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // completed Mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //appened to list
    todoList.appendChild(todoDiv);
    // clear todo input.value
    todoInput.value="";

}

function deleteCheck(e){
    const item = e.target;
    //delete

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transition', function(){
            todo.remove();
        })
    }

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}