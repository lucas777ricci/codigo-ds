const prompt = require("prompt-sync")();    

let maior = 0;
let menor = Infinity;

for (let i = 1; i <= 5; i++) {
    let num = Number(prompt("Digite um número: "));
    if (num > maior){
        maior = num;
    } else if (num < menor){
        menor = num;
    }
}
console.log("O maior número é:", maior);
console.log("O menor número é:", menor);