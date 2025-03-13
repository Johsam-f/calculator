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

let left_operand = 0;
let right_operand = 0;
let sign = '';

function Display(value){
    let current_operand = document.getElementById("input-paragraph");
    let display_result = document.getElementById("display-paragraph");
    let left_digits = document.getElementById("initial-input-paragraph");
    if(value === '(' || value === ')' || value === '%'){
        return;
    }
    if(value ==='='){
        if(current_operand.innerText == "0"){
            display_result.innerText = '0';
        }else{
            let result;
            right_operand = Number(current_operand.innerText);
            if(sign === '-'){
                result = left_operand - right_operand;
            }else if(sign === '+'){
                result = left_operand + right_operand;
            }else if(sign === '/'){
                result = left_operand / right_operand;
            }else if(sign === '*'){
                result = left_operand * right_operand;
            }else{
                result = "Error";
            }

            display_result.innerText = result;
        }
    }else{
        if(value === "+" || value === "/" || value === "*" || value === "-"){
            let characters = current_operand.innerText.split('');
            let sign_available = false;
            characters.forEach((value, index)=>{
                if(value == '/' || value == '*' || value == '+' || value == '-'){    
                    sign_available = true;
                    sign = value;
                }
            });

            if(!sign_available){
                if(current_operand.innerText == "0"){
                    if(value === "-" || value === "+"){
                        let left_digits = document.getElementById("initial-input-paragraph");
                        let characters = left_digits.innerText.split('');
                        if(characters[characters.length-1] == '-' || characters[characters.length-1] == '+'){
                            return;
                        }else{
                            current_operand.innerText = value;
                        }
                    }else{
                        return;
                    }   
                }else{
                    left_operand = Number(current_operand.innerText);
                    sign = value;
                    left_digits.innerText = current_operand.innerText + value;
                    current_operand.innerText = '0';
                    return;
                }
            }
        }
        if(value === "."){
            let characters = current_operand.innerText.split('');
            let dot_available = false;
            //checking if the dot already exist
            characters.forEach((value)=>{
                if(value == '.'){
                    dot_available = true;
                }
            });
            if(dot_available == false){
                current_operand.innerText += value;
            }
        }else if(current_operand.innerText == "0"){
            current_operand.innerText = value;
        }else{
            if(current_operand.innerText.length<=18){
                current_operand.innerText += value;
            }
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
    let left_digits = document.getElementById("initial-input-paragraph");
    display_value.innerText = '0';
    display_result.innerText = '';
    left_digits.innerText = '';
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
    Display('=');
});