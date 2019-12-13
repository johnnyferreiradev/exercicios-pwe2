function showCharacter(string, index) {
    const stringSize = string.length;
    if(index <= 0 || index > stringSize) {
        return "Esta posição não existe";
    }

    return string.charAt(index - 1);
}

const fullName = prompt('Digite seu nome completo');
const position = prompt('Digite uma posição');

alert(showCharacter(fullName, position));