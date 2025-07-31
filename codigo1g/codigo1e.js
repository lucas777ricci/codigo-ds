const prompt = require("prompt-sync")();

let distância_viajem = Number(prompt("Digite a distância da viagem em km: "));
let consumo_medio_carro = Number(prompt("Digite o consumo médio do carro em km/l: "));
let valor_combustivel = Number(prompt("Digite o valor do combustível por litro: "));
console.log("-----------------------------------------------------");

let litros_necessarios = distância_viajem / consumo_medio_carro;

console.log("Litros necessários:", litros_necessarios.toFixed(2));
console.log("Valor total da viagem: R$", (litros_necessarios * valor_combustivel).toFixed(2));