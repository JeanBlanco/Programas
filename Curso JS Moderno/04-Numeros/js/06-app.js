// typof identifica que tipo de dato estoy utilizando, ejemplo si tengo un strins, esta función me dira que es un estring.

const numero1 = "20";
const numero2 = "20.2";
const numero3 = 20;
const numero4 = 20.2;

console.log(numero1);
//.parsenint convienrte cuelquier un numero escrito en string a un numero entero
console.log(Number.parseInt(numero1));
//.parseFloat convienrte cuelquier un numero escrito en string a un numero flotante o decimal
console.log(numero2)
console.log(Number.parseFloat(numero2));

//revisar si un numero es entero o no
console.log(Number.isInteger(numero3));
console.log(Number.isInteger(numero4));