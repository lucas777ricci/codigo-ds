const prompt = require("prompt-sync")();

let valor_total = 0;
let numero_clientes = Number(prompt("Quantos clientes efetuaram o pagamnento no Restaurante:"));

for (let i = 0; i < numero_clientes; i++) {
    valor_total += Number(prompt("Digite o valor da conta do cliente R$"));
}
console.log("Valor total das contas R$",valor_total.toFixed(2));
