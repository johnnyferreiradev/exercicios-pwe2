let maior = -Infinity;
let qtd = 0;

while(qtd < 5) {
    var numero = parseInt(prompt('Digite um numero'));
    if (numero > maior) {
        maior = numero;
    }
    qtd++
}

alert(`O maior numero digitado foi o ${maior}`);
