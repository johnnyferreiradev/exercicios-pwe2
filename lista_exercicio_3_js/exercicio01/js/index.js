const notas = [];
let qtd = 0;

while(true) {
    let entrada = prompt('Digite uma nota ou fim para encerrar');

    if (entrada == 'fim') {
        break;
    }

    let nota = parseFloat(entrada);
    notas.push(nota)
    qtd++;
}

const soma = notas.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});

const media = soma / qtd;

alert('Média  = ' + media);

