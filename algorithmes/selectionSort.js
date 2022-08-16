"use strict";
// Complejidad Temporal O( n^2 )
// Complejidad Especial O( n )
// Expacio auxiliar -> O( 5 ) = O( n )
function selectionSort(arreglo) {
    let longitud = arreglo.length; //0(1)
    for (let i = 0; i < longitud; i++) { //0(n)
        let minimo = i; //0(1)
        for (let j = i + 1; j < longitud; j++) { //0(n)
            if (arreglo[j] < arreglo[minimo]) { //0(1)
                minimo = j; // 0(1)
            }
        }
        if (minimo != i) { // 0(1)
            let temporal = arreglo[i]; //0(1)
            arreglo[i] = arreglo[minimo]; // 0(1)
            arreglo[minimo] = temporal; // 0(1)
        }
    }
    return arreglo; // 0(1)
}
console.log(selectionSort([8, 5, 2, 15, 7, 1, 9]));
