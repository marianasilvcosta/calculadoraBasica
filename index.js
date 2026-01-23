const buttonsE1 = document.querySelectorAll("button");

const inputFieldE1 = document.getElementById("resultado");

for (let i = 0; i < buttonsE1.length; i++){
    buttonsE1[i].addEventListener("click", ()=>{
        const buttonValue = buttonsE1[i].textContent;
        if(buttonValue === "AC"){
            limparResultado()
        } else if (buttonValue === "="){
            calcularResultado()
        } else{
            appendValue(buttonValue);
        }
    });
}

function limparResultado(){
    inputFieldE1.value = "";
}

function calcularResultado(){
    inputFieldE1.value = eval(inputFieldE1.value);
}

function appendValue(buttonValue){
    inputFieldE1.value += buttonValue;
}