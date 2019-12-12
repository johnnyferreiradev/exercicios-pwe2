function replaceAll(string, elem, substitute) {
    let position = string.indexOf(elem);
    while(position > -1) {
        string = string.replace(elem, substitute);
        position = string.indexOf(elem);
    }

    return string;
}

const date = prompt('Digite uma data (DD/MM/AAAA)');
document.write(replaceAll(date, '/',' '));
