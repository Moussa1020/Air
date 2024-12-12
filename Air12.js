const getParametre = () => {
    const parametre = process.argv.slice(2)
    return parametre
}

const isValidLength = (parametre) =>{
    if (parametre.length !== 2) {
        return console.log("nombre d'argument incorrect, il faut 2 argument")
    } else {
        return parametre
    }
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

const  quickSort = (parametre) => {
    const newparams = parametre
    if (newparams.length <= 1) {
        return newparams
    }
    console.log(newparams, newparams.length)
    const pivot = newparams[newparams.length - 1]
    let leftElement = []
    let rightElement = []
    for (let i = 0; i < newparams.length - 1; i++) {
        if (parseInt(newparams[i]) < parseInt(pivot)) {
            leftElement.push(newparams[i])
        } else {
            rightElement.push(newparams[i])
        }
    }
    return [...quickSort(leftElement), pivot, ...quickSort(rightElement)]
}

console.log(quickSort(getParametre()))