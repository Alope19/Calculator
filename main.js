const buttons = document.querySelectorAll('.button')
let num1 = 0
let num2 = undefined
let variable
const variables = ['x','/','-','+']


buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if (variables.includes(button.dataset.value)){
            variable = button.dataset.value
            console.log(variable)
        }

    })
})

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

function operate(num1,variable,num2){
        Number(num1)
        Number(num2)

    if(variable = "+"){
        return add(num1,num2)
    }
    else if(variable = "-"){
        return subtract(num1,num2)
    }
    else if(variable = "x"){
        return multiply(num1,num2)
    }
    else{
        return divide(num1,num2)

    }

}