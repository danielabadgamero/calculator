const display = document.querySelector(".display");
const buttons = Array.from(document.querySelectorAll("button"));

let num1 = "";
let num2 = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!parseInt(button.id)) {
            if (button.id === ".") {
                if (!operator) {
                    num1 += button.id;
                } else {
                    num2 += button.id;
                }
            } else {
                if (button.id === "equal") {
                    switch (operator) {
                        case "sum":
                            display.textContent = parseInt(num1, 10) + parseInt(num2, 10);
                    }
                } else {
                    operator = button.id;
                }
            }
        } else {
            if (!operator) {
                num1 += button.id;
                display.textContent = num1;
            } else {
                num2 += button.id;
                display.textContent = num2;
            }
        }
    })
})