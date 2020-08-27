var op1 = () => parseInt(document.getElementById("firstOperand").value);
var op2 = () => parseInt(document.getElementById("secondOperand").value);
var errorMessage = document.getElementById("errorMessage");
var operationResult = document.getElementById("operationResult");

// Funciones para realizar operaciones aritmeticas
var add = (operand1, operand2) => operand1 + operand2;
var substract = (operand1, operand2) => operand1 - operand2;
var multiply = (operand1, operand2) => operand1 * operand2;
var divide = (operand1, operand2) => operand1 / operand2;

// Funciones visualizacion resultado  
var setResult = (result) => operationResult.innerText = result; 
var setError = (error) => errorMessage.innerText = error; 

//Funciones validacion de los operandos
var validOperand = (operand) => isNaN(operand) ? false : true;
var validDividend = (dividend) => dividend == 0 ? false : true; 

function validOperands(isDivision) {
    var valid = true;

    setResult("");
    setError("");
    
    if (!validOperand(op1()) || !validOperand(op2())) {
        setError("Se deben informar los dos operandos con valor numerico");
        valid = false;
    } else if (isDivision && !validDividend(op2())) {
        setError("Dividendo no puede ser 0 en una division");
        valid = false;
    }    
    return valid;
}

// Funcion que valida operando y ejecuta operacion aritmetica si son correctos
function performOperation(operation, isDivision = false)  {
    if (validOperands(isDivision)) 
    setResult(operation(op1(), op2()));
}

// Asocia eventos a botones de operaciones aritmeticas y lanza la validacion/operacion
document.getElementById("op-add").addEventListener("click", function() {performOperation(add)});
document.getElementById("op-substract").addEventListener("click", function() {performOperation(substract)});
document.getElementById("op-multiply").addEventListener("click", function() {performOperation(multiply)});
document.getElementById("op-divide").addEventListener("click", function() {performOperation(divide, true)});