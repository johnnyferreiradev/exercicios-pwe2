const idades = [];

while(true) {
    let idade = prompt('Digite uma idade');

    if (idade == 'fim') {
        break;
    }

    idades.push(idade);
}

let qtdDeMaior = 0;
let qtdDeMenor = 0;

idades.forEach((idade) => {
    if(idade >= 18) {
        qtdDeMaior++;
    } else {
        qtdDeMenor++;
    }
});

alert(`${qtdDeMaior} pessoas de maior e ${qtdDeMenor} de menor`);
