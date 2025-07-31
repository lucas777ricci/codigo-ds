const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

if (numero % 3 == 0){
    console.log("O número é divisível por 3");
}else{
    console.log("O número não é divisível por 3");
}
prompt("Pressione Enter para sair...");