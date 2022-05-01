const display = document.querySelector(".display");
const buttons = Array.from(document.querySelectorAll("button"));

let num1 = "";
let num2 = "";
let operator = "";

function debug() {
    console.log(num1);
    console.log(num2);
    console.log(operator);
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!parseInt(button.id)) {
            if (button.id === ".") {
                if (!operator) {
                    num1 += button.id;
                    display.textContent = num1;
                } else {
                    num2 += button.id;
                    display.textContent = num2;
                }
            } else if (button.id === "0") {
                if (!operator) {
                    num1 += button.id;
                    display.textContent = num1;
                } else {
                    num2 += button.id;
                    display.textContent = num2;
                }
            } else {
                if (button.id === "equal") {
                    switch (operator) {
                        case "sum":
                            display.textContent = Math.round((parseFloat(num1, 10) + parseFloat(num2, 10)) * 1000000) / 1000000;
                            num1 = (Math.round((parseFloat(num1, 10) + parseFloat(num2, 10)) * 1000000) / 1000000).toString();
                            num2 = "";
                            break;
                        case "substract":
                            display.textContent = Math.round((parseFloat(num1, 10) - parseFloat(num2, 10)) * 1000000) / 1000000;
                            num1 = (Math.round((parseFloat(num1, 10) - parseFloat(num2, 10)) * 1000000) / 1000000).toString();
                            num2 = "";
                            break;
                        case "multiply":
                            display.textContent = Math.round((parseFloat(num1, 10) * parseFloat(num2, 10)) * 1000000) / 1000000;
                            num1 = (Math.round((parseFloat(num1, 10) * parseFloat(num2, 10)) * 1000000) / 1000000).toString();
                            num2 = "";
                            break;
                        case "divide":
                            display.textContent = Math.round((parseFloat(num1, 10) / parseFloat(num2, 10)) * 1000000) / 1000000;
                            num1 = (Math.round((parseFloat(num1, 10) / parseFloat(num2, 10)) * 1000000) / 1000000).toString();
                            num2 = "";
                    }
                } else if (button.id === "erase") {
                    display.textContent = "";
                    num1 = "";
                    num2 = "";
                    operator = "";
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