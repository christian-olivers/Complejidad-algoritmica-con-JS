"use strict";
// complejidad Temporal 0( n )
// complejidad Espacial 0(  )
// complejidad auxiliar = complejidad - espacio de entrada
// complejidad auxiliar = 0(n) - 0(1) = 0(1)
function linealSearch(arreglo, clave) {
    for (let indice = 0; indice < arreglo.length; indice++) {
        if (arreglo[indice] === clave) {
            return indice;
        }
    }
    return -1;
}
console.log(linealSearch([1, 8, 5, 15, 7], 8));
