let buttons = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let body = document.querySelector("body")
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


let turnx = true;

buttons.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnx) {
            box.innerText = "X";
            console.log(turnx);
            turnx = false;

        } else {
            box.innerText = "O";
            console.log(turnx);
            turnx = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
checkWinner = () => {
    for (pattern of winPatterns) {
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(buttons[pattern[0]].innerText, buttons[pattern[1]].innerText, buttons[pattern[2]].innerText);
        if (buttons[pattern[0]].innerText === "X" && buttons[pattern[1]].innerText === "X" && buttons[pattern[2]].innerText === "X") {
            alert("Player-X Wins, Tap Reset");
            buttons.forEach((box) => {
                box.innerText = "";
                box.disabled = true;
            });
            break
        } if (buttons[pattern[0]].innerText === "O" && buttons[pattern[1]].innerText === "O" && buttons[pattern[2]].innerText === "O") {
            alert("Player-O Wins, Tap Reset");
            buttons.forEach((box) => {
                box.innerText = "";
                box.disabled = true;
            });
            break
        }

    }
}

resetBtn.addEventListener("click", () => {
    buttons.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
});

let allButton = document.querySelectorAll(".box")
resetBtn.addEventListener("click", () => {
    allButton.forEach((but)=>{
        but.classList.remove("animation");
        void but.offsetWidth;
        but.classList.add("animation");
    });
    
});

