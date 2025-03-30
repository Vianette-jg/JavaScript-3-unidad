function calcularIMC(peso, altura) { //calcular el IMC
    let imc = peso / (altura * altura);
    return `Tu IMC es ${imc.toFixed(2)}`;
}


console.log(calcularIMC(57, 1.68));
