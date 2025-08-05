const prompt = require("prompt-sync")();    

let nome_usuario = prompt("Digite seu nome: ");
let idade_usuario = Number(prompt("Digite sua idade: "));
let gmail_usuario = prompt("Digite seu e-mail: ");

if (gmail_usuario.includes("@gmail.com") && idade_usuario >= 18) {
    console.log(`Olá ${nome_usuario}, seu cadastro foi realizado com sucesso!`);
} else if (idade_usuario < 18) {
    console.log("Você não tem idade suficiente para se cadastrar");
} else {
    console.log("O e-mail deve ser do tipo @gmail.com");
}
