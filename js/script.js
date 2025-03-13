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

function Display(value){
    let display_value = document.getElementById("input-paragraph");
    if(value === "."){
            display_value.innerText += value;
    }else if(display_value.innerText == "0"){
        display_value.innerText = value;
    }else{
        if(display_value.innerText.length<=18){
            display_value.innerText += value;
        }
    }
 }

one_btn.addEventListener("click", function(){
    Display('1');
});
two_btn.addEventListener("click", function(){
    Display('2');
});
three_btn.addEventListener("click", function(){
    Display('3');
});
four_btn.addEventListener("click", function(){
    Display('4');
});
five_btn.addEventListener("click", function(){
    Display('5');
});
six_btn.addEventListener("click", function(){
    Display('6');
});
seven_btn.addEventListener("click", function () {
    Display('7');
});
eight_btn.addEventListener("click", function () {
    Display('8');
});
nine_btn.addEventListener("click", function () {
    Display('9');
});
zero_btn.addEventListener("click", function () {
    Display('0');
});
dot_btn.addEventListener("click", function () {
    Display('.');
});
plus_btn.addEventListener("click", function () {
    Display('+');
});
minus_btn.addEventListener("click", function () {
    Display('-');
});
multiply_btn.addEventListener("click", function () {
    Display('*');
});
division_btn.addEventListener("click", function () {
    Display('/');
});
left_bracket_btn.addEventListener("click", function () {
    Display('(');
});
right_bracket_btn.addEventListener("click", function () {
    Display(')');
});
percentage_btn.addEventListener("click", function () {
    Display('%');
});
clear_btn.addEventListener("click", function(){
    let display_value = document.getElementById("input-paragraph");
    let display_result = document.getElementById("display-paragraph");
    display_value.innerText = '0';
    display_result.innerText = '';
});

delete_btn.addEventListener("click", function () {
    let display_value = document.getElementById("input-paragraph");
    let current_text = display_value.innerText;

    if (current_text.length > 1) {
        current_text = current_text.slice(0, -1);
        display_value.innerText = current_text;
    } else {
        display_value.innerText = '0';
    }
});

equal_btn.addEventListener("click", function () {
    let display_value = document.getElementById("input-paragraph");
    let display_result = document.getElementById("display-paragraph");
    let current_text = display_value.innerText;
    let characters = current_text.split('');
    let syntaxError = false;

    function check_value(value, index, array) {
        // Check if the first character is an operator (except '-')
        if (index === 0 && (value === "+" || value === "/" || value === "*")) {
            syntaxError = true;
        }

        if (index > 0 && (value === "+" || value === "-" || value === "*" || value === "/")) {
            const previousValue = array[index - 1];
            if (previousValue === "+" || previousValue === "-" || previousValue === "*" || previousValue === "/") {
                syntaxError = true;
            }
        }
    }
    characters.forEach(check_value);

    // If there are no syntax errors, evaluate the expression
    if (!syntaxError) {
        try {
            let result = eval(current_text);
            display_result.innerText = result;
        } catch (error) {
            display_result.innerText = "Syntax Error";
        }
    } else {
        display_result.innerText = "Syntax Error";
    }
});

// equal_btn.addEventListener("click", function(){
//     let display_value = document.getElementById("input-paragraph");
//     let display_result = document.getElementById("display-paragraph");
//     let current_text = display_value.innerText;    
//     let characters = current_text.split('');
//     let expression_a = [];
//     let expression_b = [];
//     let sytaxError = false;

//     function check_value(value, index, array){
//         if(index === 0 && (value === "-" || value === "+" || value === "/" || value === "*")){
//             sytaxError = true;
//         }
//          // Check for consecutive operators
//         if (index > 0 && (value === "+" || value === "-" || value === "*" || value === "/")) {
//             const previousValue = array[index - 1];
//             if (previousValue === "+" || previousValue === "-" || previousValue === "*" || previousValue === "/") {
//                 syntaxError = true;
//             }
//         }
//     }
//     characters.forEach(check_value(value, index, array, sytaxError));
// });