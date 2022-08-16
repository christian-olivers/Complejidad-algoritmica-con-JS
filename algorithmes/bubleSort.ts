// Complejidad Temporal O( n^2 )
// Complejidad Espacial O( n )
// Expacio auxiliar -> O( 4 ) = O( 1 )

function bubleSort(arreglo: number[]) { // 0(n)
  let longitud = arreglo.length; // 0(1)
  for(let i = 0; i < longitud; i++) { //0(n)
    for(let j = 0; j < longitud; j++) { //0(n)
      if(arreglo[j] > arreglo[j + 1]) { //0(1)
        let temporal = arreglo[j]; //0(1)
        arreglo[j] = arreglo[j + 1]; //0(1)
        arreglo[j + 1] = temporal; // 0(1)
      }
    }
  }
  return arreglo;
}

console.log(bubleSort([8,5,2,7,1,9]));

// let bar = 'test'	// O(1)
// if() {}		// O(1)
// for() {}		// O(n)
// while() {}	// O(n)
// for() { for() {} }// O(n^2)
