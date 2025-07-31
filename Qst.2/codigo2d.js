const prompt = require("prompt-sync")();    

let idade = Number(prompt("Digite sua idade: "));
let sexo = prompt("Digite seu sexo (M/F): ").toUpperCase();

if (idade >= 18 && idade <= 29 && sexo === "M") {
    console.log("Seu alistamento é obrigatório.");
} else if (idade >= 18 && idade <=29 && sexo === "F") {
    console.log("Seu alistamento é opcional.");
} else if (idade >=30 && sexo === "M") {
    console.log("Você não é obrigado a se alistar, mas deve obter o Certificado de Dispensa.");
}else {
    console.log("Você não precisa se alistar.");
}