let loop = true;
let fraseIvertida = ''; 

while(loop) {
    let entrada = prompt('Digite uma palavra');

    if (entrada == 'fim') {
        break;
    }

    entrada += " ";
    entrada += fraseIvertida;
    fraseIvertida = entrada;
}

alert(fraseIvertida);