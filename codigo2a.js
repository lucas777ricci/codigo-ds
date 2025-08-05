const prompt = require("prompt-sync")();

let nota1 = Number(prompt("Nota 1: "))
let nota2 = Number(prompt("Nota 2: "))
let nota3 = Number(prompt("Nota 3: "))
let media = (nota1 + nota2 + nota3)/ 3;

console.log("-----------------------------------------------------");
console.log("Média:", media.toFixed(2));
if (media >= 7) {
    console.log("Aprovado");
}else if (media <= 6) { 
    console.log("Recuperação");
}