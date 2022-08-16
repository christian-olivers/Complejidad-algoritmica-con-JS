import { arrayBuffer } from "stream/consumers";

function contar(n: number ){
  for(let i = 0; i < n; i++) {
    console.log(i);
  }
}
// contar(5);

function repetir(array:number ) {
  let repeatArray = array;
  return repeatArray;
}
repetir(1);

function convertToString( arreglo: number[]) {
  let result = arreglo.map(elemento => elemento.toString());
  return result;
}

// console.log(convertToString([1,2,3]));

function dosDimenciones(valor: number) {
  let x = new Array();
  for(let i= 0; i < valor; i++) {
    x[i] = new Array(valor).fill(0)
  }
  return x;
}

// console.log(dosDimenciones(5));
