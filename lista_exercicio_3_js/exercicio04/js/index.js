let qtdDeMaior = 0;
let qtdDeMenor = 0;

while(true) {
    let idade = prompt('Digite uma idade');

    if (idade == 'fim') {
        break;
    }

    if(idade >= 18) {
        qtdDeMaior++;
    } else {
        qtdDeMenor++;
    }
}

alert(`${qtdDeMaior} pessoas de maior e ${qtdDeMenor} de menor`);
