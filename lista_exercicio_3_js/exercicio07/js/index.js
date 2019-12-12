function replaceAll(string, elem, substitute) {
    let position = string.indexOf(elem);
    while(position > -1) {
        string = string.replace(elem, substitute);
        position = string.indexOf(elem);
    }

    return string;
}

const name = prompt('Digite seu nome completo');
const caracteres = replaceAll(name, ' ', '');

alert(`Seu nome possui ${name.length} letras e ${caracteres.length}`);