// Sum of Two Numbers
function sum(a, b) {

  if (typeof a !== 'number' || typeof b !== 'number') { //Rectifica que todos los inputs sean números
    console.log("Los datos de entrada no son adecuados");
  }

  let suma = a + b;

  return suma;
}

// Factorial of a Number
function factorial(n) {

let resultado = 1;

  if (typeof n !== 'number') {
    console.log("Los datos de entrada no son adecuados");
  }

  else if (n == 0) {
    return 1;
  }

  while (n > 1) {
    resultado *= n; 
    n--;
  }

  return resultado;
}

// Find the Largest Number
function findLargest(arr) {
  
  if (typeof arr !== 'number') {
    console.log("Los datos de entrada no son adecuados");
  }

  let mayor = Math.max(...arr); //... sirve para pasar el array de números a la función y comparar sus elementos individualmente para determinar cuál es el mayor

  return mayor;
}

// Count Vowels in a String
function countVowels(str) {

  let numero_vocales = 0;
  
  if (typeof str !== 'string') {
    console.log("Los datos de entrada no son adecuados");
  }

  for (let i = 0; i < str.length; i++) {
    let caracter = str[i].toLowerCase(); //Pasar todos los caracretes del arreglo a minúsculas
    if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
      numero_vocales += 1;
    }
  }

  return numero_vocales;
}

// Check if a Number is Prime
function isPrime(n) {

  let primo = true;
  
  if (typeof n !== 'number') {
    console.log("Los datos de entrada no son adecuados");
  }

  if (n === 1) {
    primo = false;
  }

  else if (n > 1) {
    for (let i = 2; i < n; i++) { //Se verifican los posibles divisores que haya desde 2 hasta el número n-1
      if (n % i === 0) {
        primo = false;
        break;
      }
    }
  }

  return primo;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};