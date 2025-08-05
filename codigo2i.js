const prompt = require("prompt-sync")(); 

let anos_fumando = Number(prompt("Quantos anos você fumou? "));
let cigarros_por_dia = Number(prompt("Quantos cigarros você fuma por dia? "));
let preco_cartela = Number(prompt("Qual o preço de uma carteira de cigarros? "));
let dias_fumando = anos_fumando * 365;
let cigarros_totais = dias_fumando * cigarros_por_dia;
let gastos_totais = (cigarros_totais / 20) * preco_cartela;

if (gastos_totais > 10000){
    console.log(`Você ja gastou muito, totalizando R$ ${gastos_totais.toFixed(2)}.`);
} else {
    console.log(`Você ainda não gastou tanto, totalizando R$ ${gastos_totais.toFixed(2)}.`);
}