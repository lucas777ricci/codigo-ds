const prompt = require("prompt-sync")();

let valor_produto = 120, desconto = valor_produto * (15/100);

console.log("|Valor do produto:", valor_produto);
console.log("|Valor do produto com desconto de 15%:", valor_produto - desconto);
console.log("|Taxa de entrega R$ 10,00");
console.log("|Valor total:", (valor_produto - desconto) + 10);