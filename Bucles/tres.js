let contador = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
        contador++;
    }
}

console.log(" La Cantidad de números son " + contador);
