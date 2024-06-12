const btnChange = document.createElement("button");
btnChange.setAttribute("id", "btnChange");
btnChange.innerHTML = "Change Grid";
document.body.appendChild(btnChange);

const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

btnChange.addEventListener("mouseover", () => {
    btnChange.style.backgroundColor = "blue";
    btnChange.style.cursor = "pointer";
});

btnChange.addEventListener("mouseout", () => btnChange.style.backgroundColor = "");

btnChange.addEventListener("click", () => {
    let userInput = prompt("How many grids do you want from 2 x 2 to 100 x 100?");

    if (userInput >= 2 && userInput <= 100) {
        container.innerHTML = "";

        const boxSize = 900 / userInput - 4;

        for (let i = 0; i < userInput * userInput; i++) {
            const myDivs = document.createElement("div");
            myDivs.classList.add("myDivs");
            myDivs.style.width = `${boxSize}px`;
            myDivs.style.height = `${boxSize}px`;
            container.appendChild(myDivs);
            
            myDivs.addEventListener("mouseover", () => myDivs.style.backgroundColor = "black")
        }

    } else {
        alert("This is not within the limits");
    }
});





