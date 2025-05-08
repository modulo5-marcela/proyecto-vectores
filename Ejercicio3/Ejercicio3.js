// Declaración de variables
let hora12, hora24;
let periodo;

//  Leer hora en notación de 12 horas y el periodo
hora12 = parseInt(prompt("Ingrese la hora en notación de 12 horas (1 a 12): "));
periodo = prompt("Ingrese el periodo (am o pm): ").toLowerCase(); //El método .toLowerCase() se utiliza en JavaScript para convertir una cadena de texto a minúsculas.

// Validación de la hora ingresada
if (hora12 < 1 || hora12 > 12) {
    document.write ("La hora ingresada no es válida. ");
} else {
    // Proceso: Convertir a notación de 24 horas
    if (periodo === "am") {
        if (hora12 === 12) {
            hora24 = 0; // Medianoche
        } else {
            hora24 = hora12;
        }
    } else if (periodo === "pm") {
        if (hora12 === 12) {
            hora24 = 12; // Mediodía
        } else {
            hora24 = hora12 + 12; // Sumar 12 para obtener la hora en formato de 24 horas
        }
    } else {
        document.write(" El periodo ingresado no es válido. Use 'am' o 'pm'. <br>");
    }

    // Muestra la hora en notación de 24 horas
    document.write("La hora en notación de 24 horas es: " + hora24);
}


