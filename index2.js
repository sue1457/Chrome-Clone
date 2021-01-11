/*
function sayHello(name, age){
    console.log(`Hello ${name}, you have ${age} years old!`)
    console.log("Hello", name, "you have", age, "years old" )
}
sayHello('sunwoo', 26)






function sayHello(name, age){
    return `Hello ${name}, you have ${age} years old!`
}
const greetSunwoo = sayHello('sunwoo', 26)
console.log(greetSunwoo)






const calculator = {
    plus : function(a, b) {
        return a + b;
    }
}
const plus = calculator.plus(5, 5)
console.log(plus)






const title = document.getElementById("title")
title.innerHTML = "Hi! From JS";
title.style.color = "navy";
document.title = "FED JS";






const title = document.querySelector("#title");

function handleClick(event){
    // console.log("I have been resized!")
    // console.log(event)
    title.style.color = "navy";
}

// window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);






const age = prompt("How old are you?");

if(age < 18){
    console.log("Too young!")
} else if(age >= 18 && age <=21){
    console.log("You can drink but you should not!")
} else{
    console.log("Go ahead!")
}









const title = document.querySelector("#title");

const BASE_COLOR = "black";
const OTHER_COLOR = "navy";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();

function handleOffline(){
    console.log("So sad..");
}

function handleOnline(){
    console.log("Welcome back!");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/







const title = document.querySelector("#title");

const CLIKED_CLASS = "clicked";

// function handleClick(){
//     const currentClass = title.className;
//     if(currentClass !== CLIKED_CLASS){
//         title.className = CLIKED_CLASS;
//     } else{
//         title.className = "";
//     }
// }

function handleClick(){

    // title.classList.toggle(CLIKED_CLASS);

    const hasClass = title.classList.contains(CLIKED_CLASS);
    if(!hasClass){
        title.classList.add(CLIKED_CLASS);
    } else{
        title.classList.remove(CLIKED_CLASS);
    }
}

function init(){
    title.addEventListener("click", handleClick);
}

init();