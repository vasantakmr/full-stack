var fNameInputElement = document.querySelector(".fname");

fNameInputElement.addEventListener("change", handleInput);



function handleInput() {
    //console.dir(fNameInputElement)
    console.log(fNameInputElement.value);
    
    input = fNameInputElement.value
    initialString = "Hello";

    console.log(initialString + input)
}




