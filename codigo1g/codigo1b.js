const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Digite um número: "));
let numero2 = Number(prompt("Digite mais um número: "))

console.log("Soma:",numero1 + numero2);
console.log("Subtração:",numero1 - numero2);
console.log("Multiplicação:",numero1 * numero2);
if (numero2 == 0){
    console.log("Impossivel dividir por 0");
}else{
    console.log("Divisão:",numero1 / numero2);
}
console.log("Resto:",numero1 % numero2);