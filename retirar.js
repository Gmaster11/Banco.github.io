let Usuario = localStorage.getItem("usuario");
let Saldo = localStorage.getItem("saldo");
document.getElementById('nuevo').value = Saldo;
let SUMA = '';

//Variable para almacenar valor mostrado:
let displayValue = ''; 

//Funcion para agregar valores / visualizarlos 
function appendToDisplay(value){
    displayValue += value; // Asignar el valor presionado existente 
    document.getElementById('display').value = displayValue; // Actualizar mi campo de input 
    
}

// Funcion para limpiar C
function clearDisplay(){
    displayValue = ''; // Vale vacio, cadena vacia 
    document.getElementById('display').value = displayValue;
}

//Funcion para realizar los calculos 
function calculate(){ 
    try{
        //const result = eval(displayValue); // Evaluar nuestra expresion
        Saldo = Number(Saldo)- Number(displayValue);
        console.log(Saldo);

        document.getElementById('nuevosaldo').value = Saldo; // Mostrar el resultado 
       // displayValue = result.toString(); // Conviertelo a cadena
       displayValue = ''; // Vale vacio, cadena vacia 
       document.getElementById('display').value = displayValue;

        console.log(Usuario);
        console.log(Saldo);
        location.href= 'final.html',5000;

        
    } catch(error){
        document.getElementById('display').value = "Error";
    }
}

