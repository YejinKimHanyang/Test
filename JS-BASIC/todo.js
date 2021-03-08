const toDoForm = document.querySelector(".js-toDoForm"), //meaning we get the ".." from the html
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

//it passes a check
//function filterFn(toDo){
//    return toDo.id === 1;
//}

let toDos = []; 


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
//        console.log(toDo.id, li.id);
        return toDo.id !== parseInt(li.id);
    });
//    console.log(cleanToDos);
    toDos = cleanToDos
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,  JSON.stringify(toDos));// because localStorage can only save strings need to change javascript objects into string as well;
}

function paintToDo(text){
//    console.log(text);
    const li = document.createElement("li"); //creating the li button
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id= newId;   
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj); //take the element and push it inside the array.
    saveToDos();
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //so that after putting in the input, the form will be empty again
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
//        console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
        }
//        console.log(parsedToDos); //want to execute inside the parsedToDos the function paintToDO!
    }

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();