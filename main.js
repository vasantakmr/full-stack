console.log("Main.js is linked")

for(i = 0; i < document.getElementsByClassName("topic").length; i++) {
    document.getElementsByClassName("topic")[i].setAttribute("style", "background-color: red; color: white") 
}

document.getElementById("topic").setAttribute("style", "background-color: black; color: white") 

for(i = 0; i < document.getElementsByTagName("h3").length; i++) {
    document.getElementsByTagName("h3")[i].setAttribute("style", "background-color: violet; color: white") 
}

document.querySelector(".item").parentElement.setAttribute("style", "background-color: violet") 