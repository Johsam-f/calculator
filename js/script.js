const delete_btn = document.getElementById("delete-btn");
const clear_btn = document.getElementById("clear-btn");
const left_bracket_btn = document.getElementById("left-bracket-btn");
const right_bracket_btn = document.getElementById("right-bracket-btn");
const division_btn = document.getElementById("division-btn");
const seven_btn = document.getElementById("seven-btn");
const eight_btn = document.getElementById("eight-btn");
const nine_btn = document.getElementById("nine-btn");
const multiply_btn = document.getElementById("multiply-btn");
const four_btn = document.getElementById("four-btn");
const five_btn = document.getElementById("five-btn");
const six_btn = document.getElementById("six-btn");
const minus_btn = document.getElementById("minus-btn");
const one_btn = document.getElementById("one-btn");
const two_btn = document.getElementById("two-btn");
const three_btn = document.getElementById("three-btn");
const plus_btn = document.getElementById("plus-btn");
const zero_btn = document.getElementById("zero-btn");
const dot_btn = document.getElementById("dot-btn");
const percentage_btn = document.getElementById("percentage-btn");
const equal_btn = document.getElementById("equal-btn");

function Display(value) {
    let input = document.getElementById("input-paragraph");

    if (value === '=') {
        try {
            let expression = input.innerText.replace('%', '/100');
            let result = eval(expression);
            input.innerText = result;
        } catch (e) {
            input.innerText = 'Syntax-Error';
        }
    } else {
        if (input.innerText === '0' && value !== '.' && value !== '+' && value !== '-' && value !== '*' && value !== '/' || input.innerText === 'Syntax-Error') {
            input.innerText = value;
        } else {
            input.innerText += value;
        }
    }
}

one_btn.addEventListener("click", () => Display('1'));
two_btn.addEventListener("click", () => Display('2'));
three_btn.addEventListener("click", () => Display('3'));
four_btn.addEventListener("click", () => Display('4'));
five_btn.addEventListener("click", () => Display('5'));
six_btn.addEventListener("click", () => Display('6'));
seven_btn.addEventListener("click", () => Display('7'));
eight_btn.addEventListener("click", () => Display('8'));
nine_btn.addEventListener("click", () => Display('9'));
zero_btn.addEventListener("click", () => Display('0'));
dot_btn.addEventListener("click", () => Display('.'));
plus_btn.addEventListener("click", () => Display('+'));
minus_btn.addEventListener("click", () => Display('-'));
multiply_btn.addEventListener("click", () => Display('*'));
division_btn.addEventListener("click", () => Display('/'));
left_bracket_btn.addEventListener("click", () => Display('('));
right_bracket_btn.addEventListener("click", () => Display(')'));
percentage_btn.addEventListener("click", () => Display('%'));

clear_btn.addEventListener("click", () => {
    let input = document.getElementById("input-paragraph");
    input.innerText = '0';
});

delete_btn.addEventListener("click", () => {
    let input = document.getElementById("input-paragraph");
    if (input.innerText.length > 1) {
        input.innerText = input.innerText.slice(0, -1);
    } else {
        input.innerText = '0';
    }
});

equal_btn.addEventListener("click", () => Display('='));
