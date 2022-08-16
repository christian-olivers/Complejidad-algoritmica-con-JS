const performa = require('perf_hooks');

function contar(n: number) {
  for(let i:number = 0; i < n; i++) {
    console.log(i);
  }
}

// let incioTiempo = performa.performance.now();
// contar(5);
// let finalTiempo = performa.performance.now();

// otra forma
console.time(`time`);
contar(5);
console.timeEnd(`time`);


// console.log("hola typescript");
