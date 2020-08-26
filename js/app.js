var op1 = () => parseInt(document.getElementById("firstOperand").value);
var op2 = () => parseInt(document.getElementById("secondOperand").value);
var errorMessage = document.getElementById("errorMessage");
var operationResult = document.getElementById("operationResult");

// Funcion: add
// Devuelve la suma dos numeros recbidos por parametro
var add = (operand1, operand2) => operand1 + operand2;

// Funcion: substract
// Devuelve el resultado de restar el segundo parametro del primero 
var substract = (operand1, operand2) => operand1 - operand2;

// Funcion: multiply
// Devuelve el producto dos numeros recbidos por parametro
var multiply = (operand1, operand2) => operand1 * operand2;

// Funcion: divide
// Devuelve el resultado de dividir el primer parametro por el segundo 
var divide = (operand1, operand2) => operand1 / operand2;

// Funcion: validOperand
// Valida que el parametro de una operación sea un valor numerico 
//var validOperand = (operand) => operand.trim() == "" || isNaN(operand.trim()) ? false : true;
var validOperand = (operand) => isNaN(operand) ? false : true;

// Funcion: validDividend
// Valida que el dividendo de una división no sea 0 
var validDividend = (dividend) => dividend == 0 ? false : true; 

// Funcion: setResult
// Visualiza en el campo el resultado de la operacion 
var setResult = (result) => operationResult.innerText = result; 

// Funcion: setError
// Visualiza en el campo de error un mensaje  
var setError = (error) => errorMessage.innerText = error; 


// Funcion: handleOperation
// Realiza la operación correspondiente al boton de operacion pulsado
var handleOperation = (event) => {
    setError("");
    setResult("");

    //Valida que los operandos son valores validos
    if (!validOperand(op1()) || !validOperand(op2())) {
      setError("Se deben informar los dos operandos con valor numerico");
    } else {    
        switch (event.target.id) {
            case "op-divide": 
                //Valida que el valor del dividendo sea valido
                if (!validDividend(op2())) 
                    setError("Dividendo no puede ser 0 en una division");
                else 
                    setResult(divide(op1(), op2()));
                break;
            
            case "op-add":
                setResult(add(op1(), op2()));
                break;

            case "op-substract":
                setResult(substract(op1(), op2()));
                break;

            case "op-multiply":
                setResult(multiply(op1(), op2()));
                break;
        }
    }
};

document.getElementById("op-add").addEventListener("click", handleOperation);
document.getElementById("op-substract").addEventListener("click", handleOperation);
document.getElementById("op-multiply").addEventListener("click", handleOperation);
document.getElementById("op-divide").addEventListener("click", handleOperation);
