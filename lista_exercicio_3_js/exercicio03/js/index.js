let fraseIvertida = ''; 

while(true) {
    let entrada = prompt('Digite uma palavra');

    if (entrada == 'fim') {
        break;
    }

    entrada += " ";
    entrada += fraseIvertida;
    fraseIvertida = entrada;
}

alert(fraseIvertida);