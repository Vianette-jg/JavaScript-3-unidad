// TIPOS DE VARIABLES EN JAVASCRIPT

// 1. var - Tiene un alcance funcional y permite redeclaración.
var nombre = "Via";  
console.log(nombre);  // "Via"

// Se puede redeclarar sin error
var nombre = "Juan";  
console.log(nombre);  // "Juan"

// 2. let - Tiene alcance de bloque y no permite redeclaración en el mismo ámbito.
let apellido;
apellido = "Gómez";  
console.log(apellido); // "Gómez"


// 3. const - Variable constante (no cambia su valor)
const pi = 3.1416;
console.log(pi); // 3.1416


// -------------------------------------------------------
// EXPLICACIÓN DE SCOPE, REDECLARACIÓN Y HOISTING
// -------------------------------------------------------

// SCOPE 
// Determina en qué partes del código una variable es accesible.

// var → Alcance funcional
function ejemploVar() {
    var x = 10;
    if (true) {
        var x = 20;  
        console.log(x); // 20
    }
    console.log(x); // 20 (se modificó dentro del bloque)
}


// REDECLARACIÓN
// Se refiere a si se puede volver a declarar la misma variable en el mismo ámbito.
var a = 1;
var a = 2; //  Permitido con var 

let b = 1;
// let b = 2; //  No permitido con let 

const c = 3;
// const c = 4; //  No permitido con const

// HOISTING
// JavaScript eleva las declaraciones de variables a la parte superior del código,
// pero solo var se inicializa con undefined.
