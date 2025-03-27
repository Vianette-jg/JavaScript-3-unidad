let secreto = 7; //Adivina el numero secreto con do while
let intento = 0;

do {
    intento++;
    console.log("Intento: " + intento);
} while (intento !== secreto);

console.log("Encontraste el número secreto era: " + secreto);
