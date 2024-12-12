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

const concat = (parametre) =>{
    const separateur = parametre.slice(-1)
    const arrayOfString = parametre.slice(0,-1)
    let stringConcat = ""
    for (let i = 0; i < arrayOfString.length; i++) {
        for (let j = 0; j < arrayOfString[i].length; j++) {
            stringConcat += arrayOfString[i][j]
        }
        if (i !== arrayOfString.length - 1) {
            stringConcat += separateur
        }
    }
    return stringConcat
}

const getConcat = () =>{
    const isValidArgument = isValidLength(getParametre())
    if (!isValidArgument) {
        return
    }
    return concat(isValidArgument)
}

console.log(getConcat())