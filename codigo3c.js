let totalFolha = 0;

for (let i = 1; i <= 20; i++) {
    let codigo = prompt(`Digite o código do funcionário ${i}:`);
    let salario = parseFloat(prompt(`Digite o salário do funcionário ${i}:`));

    if (isNaN(salario)) {
        alert("Salário inválido. Tente novamente.");
        i--; 
        continue;
    }

    totalFolha += salario;
}

let mediaSalarial = totalFolha / 20;

alert(`Total da folha de pagamento: R$ ${totalFolha.toFixed(2)}\nMédia salarial: R$ ${mediaSalarial.toFixed(2)}`);