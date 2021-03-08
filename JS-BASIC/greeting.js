const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN ="showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); //default is when the input text disappears
    const currentValue = input.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}
    
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit) //when smth is submitted
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN); //what does this do?
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //she is not
        askForName();
    }else {
        //she is
        paintGreeting(currentUser);
    }
}
function init(){
    loadName();
}

init();