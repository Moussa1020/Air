const getParametre = () => {
    const parametre = process.argv.slice(2)
    return parametre
}

const isNumber = (parametre) => {
    const newparams = parametre;
    for (let i = 0; i < newparams.length; i++) {
        if (isNaN(newparams[i])) {
            return console.log("Veuillez entrer que des chiffre")
        }
    }
    return newparams
}

function insertIntoArray(array, new_element) {
    const argument = [...array, new_element]
    for (let i = 0; i < argument.length; i++) {
        let imin = i
        for (let j = i; j < argument.length; j++) {
            if (parseInt(argument[j]) < parseInt(argument[imin])) {
            [argument[imin], argument[j]] = [argument[j], argument[imin]];
            }
        }
    }
    return argument
}

const getInsertIntoArray = () => {
    const isValidArgument = isNumber(getParametre())

    if (!isValidArgument) {
        return
    }
    
    const shortArray = isValidArgument.slice(0, -1)
    const new_element = isValidArgument[isValidArgument.length - 1]
    return insertIntoArray(shortArray, new_element)
}

console.log(getInsertIntoArray())