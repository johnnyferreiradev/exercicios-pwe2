function getFirstName(fullname) {
    const arrayName = fullname.split(" ");
    return arrayName[0];
}

function checkMinSize(size, string) {
    const name = getFirstName(string);
    return name.length >= size ? true : false; 
}

function checkFistLetter(string) {
    const words = string.split(" ");
    let index;
    let isValid = true;

    words.forEach((word) => {
        if (word != "de" || word != "do" || word != "da") {
            index = word[0].search(/[A-Z]/);

            if(index == -1) {
                isValid = false;
            }
        }
    });

    return isValid;
}

function checkLastNameExists(string) {
    const words = string.split(" ");
    if(words[0] && words.length >= 2 && words[1] != "") {
        return true;
    }

    return false;
}

function checkIfNotContainsNumber(string) {
    var index = string.search(/[0-9]/);
    
    return index == -1 ? true : false;
}


const name = prompt("Digite seu nome completo");

const isValid = 
    checkMinSize(4, name) &&
    checkFistLetter(name) &&
    checkLastNameExists(name) &&
    checkIfNotContainsNumber(name);

if(isValid) {
    alert('Nome válido!');
} else {
    alert('Nome inválido!');
}

