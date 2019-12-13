let qtd = 0;
let somaNotas = 0;

while(true) {
    let entrada = prompt('Digite uma nota ou fim para encerrar');

    if (entrada == 'fim') {
        break;
    }

    somaNotas += parseFloat(entrada);
    qtd++;
}

const media = somaNotas / qtd;

alert('Média  = ' + media);

