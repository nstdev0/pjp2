// Función suma tradicional
function sumaT(a, b) {
    return a + b;
}
console.log(sumaT(3,5))

// Función flecha suma
const sumaF = (a, b) => a + b;
console.log(sumaF(2, 5));

//Función contador
function createCounter() {
    let count = 0;
  
    function increment() {
      count++;
      console.log('Contador:', count);
    }
    return increment;
  }
  
const counter = createCounter();

counter();
counter();
counter();

//Desestructuración de arreglos
const numeros = [1, 2, 3, 4, 5];
const [primerNumero] = numeros;
console.log(primerNumero);

//Función encontrar el número más pequeño de un arreglo
function findSmallest(arr) {
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num < smallest) smallest = num;     
    }
    return smallest
}

let arr = [91, 35, 47, 52];
console.log(findSmallest(arr));

//
