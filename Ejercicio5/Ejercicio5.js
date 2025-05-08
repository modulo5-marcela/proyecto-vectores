// Declaración de variables
let matriz = []; // Creamos un array bidimensional
let productoFila, productoColumna;

// Inicializamos la matriz con dos filas y tres columnas
for (let fila = 0; fila <= 1; fila++) {
    matriz[fila] = []; // Creamos una fila como un array dentro de matriz
    for (let columna = 0; columna <= 2; columna++) {
        matriz[fila][columna] =prompt("Ingrese el número entero para la fila"+fila+" y la columna"+ columna+":");
    }
}

// Muestra la matriz cargada
document.write("La matriz cargada es:<br>");
for (let fila = 0; fila <= 1; fila++) {
    for (let columna = 0; columna <= 2; columna++) {
        document.write(matriz[fila][columna] + " ");
    }
    document.write("<br>"); // Salto de línea al terminar una fila
}

// Proceso: Multiplicar los elementos de cada fila
for (let fila = 0; fila <= 1; fila++) {
    productoFila = 1; // Inicializamos el producto de la fila en 1
    for (let columna = 0; columna <= 2; columna++) {
        productoFila *= matriz[fila][columna]; // Multiplicamos cada elemento de la fila
    }
    document.write("El producto de los elementos de la fila" +fila+ "es: "+productoFila+"<br>");
}

// Proceso: Multiplicar los elementos de cada columna
for (let columna = 0; columna <= 2; columna++) {
    productoColumna = 1; // Inicializamos el producto de la columna en 1
    for (let fila = 0; fila <= 1; fila++) {
        productoColumna *= matriz[fila][columna]; // Multiplicamos cada elemento de la columna
    }
    document.write("El producto de los elementos de la columna "+columna+" es:" +productoColumna+"<br>");
}
