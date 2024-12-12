const getParametre = () => {
    const parametre = process.argv.slice(2)
    return parametre
}

const isValidLength = (parametre) =>{
    if (parametre.length < 2) {
        return console.log("nombre d'argument incorrect, il faut au moin 2 argument")
    } else {
        return parametre
    }
}

const rotateToLeft = (parametre) => {
    const newparams = parametre
    const rotate = []
    for (let i = 0; i < newparams.length; i++) {
        if (i === newparams.length - 1) {
            rotate.push(newparams[0])
        } else {
            rotate.push(newparams[i+1])
        }
    }
    return rotate
}

const getRotateToLeft = () => {
    const isValidArgument = isValidLength(getParametre())
    if (!isValidArgument) {
        return
    }

    return rotateToLeft(isValidArgument)
}

console.log(getRotateToLeft())