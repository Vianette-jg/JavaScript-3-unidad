let dia = 4; // Dias de la semana
let resultado;

if (dia === 1) {
    resultado = "Lunes";
} else if (dia === 2) {
    resultado = "Martes";
} else if (dia === 3) {
    resultado = "Miércoles";
} else if (dia === 4) {
    resultado = "Jueves";
} else if (dia === 5) {
    resultado = "Viernes";
} else if (dia === 6) {
    resultado = "Sábado";
} else if (dia === 7) {
    resultado = "Domingo";
} else {
    resultado = "Día inválido";
}

console.log(resultado);