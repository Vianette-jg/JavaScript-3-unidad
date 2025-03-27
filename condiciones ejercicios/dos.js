let calificacion = 80; //calificaciones
let resultado;

if (calificacion === 100) {
    resultado = "Excelente calificación";
} else if (calificacion === 80) {
    resultado = "Buena calificación";
} else if (calificacion === 70) {
    resultado = "Aprobatoria";
} else if (calificacion === 60) {
    resultado = "Mala calificación";
} else {
    resultado = "Calificación no válida";
}

console.log(resultado);