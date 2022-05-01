const display = document.querySelector(".display");
const buttons = Array.from(document.querySelectorAll("button"));

let num1 = "";
let num2 = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!operator) {
            num1 += button.id
        } else {
            num2 += button.id
        }
    })
})