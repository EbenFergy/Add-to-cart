const h1 = document.querySelector("h1");
const jello = document.querySelectorAll("li")[1];
const addBtn = document.getElementById("add");
const ul = document.querySelector("ul");
const clearButton = document.querySelector("#clear");
const boxAreaInput = document.querySelector("#boxarea");



addBtn.addEventListener("click", function(){
    if(boxAreaInput.value.length > 0){
        const newElement = document.createElement("li");
        newElement.appendChild(document.createTextNode(boxAreaInput.value));
        ul.appendChild(newElement);
        boxAreaInput.value = "";

        const newBtn = document.createElement("button");
        newBtn.appendChild(document.createTextNode("remove"));
        newElement.appendChild(newBtn);
        newBtn.addEventListener("click", function(){
            ul.removeChild(newElement);
        })

    }
    

})


// let array = [1, 2, 10, 16];
// let nEwArray = array.map =(num)=>num=num+2;

// let obj1 = {
//     name:"White",
//     class:"Grade 1"
// }

// let obj2 = obj1;

// obj2.class = "Grade 4A";

// console.log("obj1", obj1);
// console.log("obj2", obj2);


// const houses = {
//     bungalow:`small`,
//     Duplex:"big",
//     skyscraper:"massive"
// }