const getParametre = () => {
    const parametre = process.argv.slice(2)
    return parametre
}

const isValidLength = (parametre) =>{
    if (parametre.length < 3) {
        return console.log("nombre d'argument incorrect, il faut au moin 3 argument")
    } else {
        return parametre
    }
}

const getSeparatorIndex = (parametre) => {
    const newparams = parametre
    let separatorIndex = []
    for (let i = 0; i < newparams.length; i++) {
        if (isNaN(newparams[i])) {
            separatorIndex.push(i)
        }
    }
    return separatorIndex
}

const splitIntotwoArray = (parametre) => {
    const newparams = parametre
    let firstArray = []
    let secondArray = []
    const separateur = getSeparatorIndex(newparams)
    if (separateur.length > 1) {
        return console.log("Veuillez entrer que des chiffre a part le separateur")
    }
    for (let i = 0; i < newparams.length; i++) {
        if (i < separateur[0]) {
            firstArray.push(newparams[i])
        } else if (i > separateur[0]) {
            secondArray.push(newparams[i])
        }
    }
    return [firstArray, secondArray]
}

function mixTwoArray(firstArray, secondArray) {
    const argument = [...firstArray, ...secondArray]
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

const getMixTwoArray = () => {
    const isValidLengt = isValidLength(getParametre())
    if (!isValidLengt) {
        return
    }

    const array = splitIntotwoArray(isValidLengt)
    if (!array) {
        return
    }
    
    const firstArray = array[0]
    const secondArray = array[1]
    return mixTwoArray(firstArray, secondArray)
}

console.log(getMixTwoArray())

