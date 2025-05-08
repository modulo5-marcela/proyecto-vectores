// Declaración de variables
let vectorOriginal = [];
let vectorInvertido = [];
let i;

// Entrada: Leer 3 cadenas de caracteres
for (i = 0; i <= 2; i++) {
    vectorOriginal[i] = prompt("Ingrese el elemento " + (i + 1) + ":");
}

// Proceso: Copiar los elementos del vectorOriginal en el vectorInvertido en orden inverso
let j=0;
for (i = 2; i >= 0; i--) {
    vectorInvertido[i] = vectorOriginal[j];
    j=j+1;
}

// Muestra el vector original
document.write("El vector original es:<br>");
for (i = 0; i <= 2; i++) {
    document.write(vectorOriginal[i] + "<br>");
}

//  Muestra el vector invertido
document.write(" El vector en orden inverso es:<br>");
for (i = 0; i <= 2; i++) {
    document.write(vectorInvertido[i] + "<br>");
    
}
