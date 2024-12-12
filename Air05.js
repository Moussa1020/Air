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

const isValidOperator = (argument) => {
    const newArgument = argument
    const operateur = newArgument.slice(-1)
    if (operateur[0].charCodeAt(0) !== 43 && operateur[0].charCodeAt(0) !== 45) {
        return console.log("veuillez entrer un operateur valid svp")
    }
    return newArgument
}

const onEachOfThem = (parametre) => {
    const newparams = parametre
    const operateur = newparams.slice(-1)
    let onEachOfThem = []
    for (let i = 0; i < newparams.length - 1; i++) {
        let getData = parseInt(newparams[i]) + parseInt(operateur)
        onEachOfThem.push(getData)
    }
    return onEachOfThem
}

const getOnEachOfThem = () => {
    const isValidArgument = isValidOperator(isNumber(getParametre()))

    if (!isValidArgument) {
        return
    }

    return onEachOfThem(isValidArgument)
}

console.log(getOnEachOfThem())

