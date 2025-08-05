const prompt = require("prompt-sync")(); 

let largura = Number(prompt("Digite a largura do estabelecimento: "));
let profundidade = Number(prompt("Digite a profundidade do estabelecimento: "));

let area = largura * profundidade;

if (area <= 49){
    console.log(`O estabelecimento é uma Mercearia, medindo ${area}m²`);
} else if (area >= 50 && area <= 399){
    console.log(`O estabelecimento é um Mercadinho, medindo ${area}m²`);
} else if (area >= 400 && area <= 999){
    console.log(`O estabelecimento é um Mercado, medindo ${area}m²`);
} else if (area >= 1000 && area <= 2499){
    console.log(`O estabelecimento é um Supermercado, medindo ${area}m²`);
} else if (area >= 2500){
    console.log(`O estabelecimento é um Hipermercado, medindo ${area}m²`);
}