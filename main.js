const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')
const clear = document.querySelector('.clear')
const erase = document.querySelector('.erase')
let num1 = ''
let num2 = ''
let variable
let value = 0
const variables = ['x','/','-','+']


buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if (variables.includes(button.dataset.value)){
            if (num2 == ''){
                variable = button.dataset.value
            }
            else{
                value = operate(num1,num2,variable)
                num1 = String(value)
                num1 = num1.substring(0,15)
                num2 = ''
                variable = button.dataset.value
                displayScreen(num1)

            }
        }
        else if(button.dataset.value == '='){
            value = operate(num1,num2,variable)
            num1 = String(value)
            num1 = num1.substring(0,15)
            num2 = ''
            variable = undefined
            displayScreen(value)
        }
        else {
            if (variable == undefined){
                if (value != 0){
                    num1 = ''
                    value = ''
                }
                if(num1.includes('.') && button.dataset.value == '.'){
                    return
                }
                num1 = num1 + button.dataset.value
                num1 = num1.substring(0,15)
                displayScreen(num1)
            }
            else{
                if(num2.includes('.') && button.dataset.value == '.'){
                    return
                }
                num2 = num2 + button.dataset.value
                num2 = num2.substring(0,15)
                displayScreen(num2)
            }

        }

    })
})

clear.addEventListener('click',()=>{
    num1 = ''
    num2 = ''
    variable = undefined
    value = 0
    displayScreen('0')
})
erase.addEventListener('click',()=>{
    if(num2 == ''){
        num1 = num1.slice(0,-1)
        displayScreen(num1)
    }
    else{
        num2 = num2.slice(0,-1)
        displayScreen(num2)
    }

})
function displayScreen(displayItem){
    if (displayItem == '')
    displayItem = 0
    display.textContent = displayItem    
}
function decimalCheck(string){
    
}


function add(a,b){
    return a + b
}
function subtract(a,b){
     return a - b
}
function multiply(a,b){
    return a * b
}
function divide(a,b){
    return a / b
}

function operate(number1,number2,vari){
    let total
    if(number1 == '' || vari == undefined){
        return number1
    }
    else if (number2 == ''){
        number2 = number1
    }
        number1 = Number(number1)
        number2 = Number(number2)

    if(vari == "+"){
        total = add(number1,number2)
    }
    else if(vari == "-"){
        total = subtract(number1,number2)
    }
    else if(vari == 'x'){
        total = multiply(number1,number2)
    }
    else if(vari == '/'){
        total = divide(number1,number2)

    }

    total = Math.round(total * 10000) / 10000
    if(total > 900000000000000){
        total = total.toExponential()
    }
    return total

}