console.log("Main.js is linked")

var themeToggler = document.createElement("button");
themeToggler.textContent = "Switch to Dark Mode"

themeToggler.className = "themeButton";

document.querySelector("body").appendChild(themeToggler);

themeToggler.onclick = () => toggleTheme();

function toggleTheme() {
    document.body.classList.toggle("dark");
    if(themeToggler.textContent == "Switch to Dark Mode") {
        themeToggler.textContent = "Switch to Light Mode"
    } else {
        themeToggler.textContent = "Switch to Dark Mode"
    }
}