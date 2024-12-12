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

const isAsemArgument = (firstArgument, secondArgument) => {
    let isSem = true
    for (let i = 0; i < secondArgument.length; i++) {
        if (firstArgument[i].charCodeAt(0) !== secondArgument[i].charCodeAt(0)) {
            isSem = false
        }
    }
    return isSem
}

const searchIntruder = (parametre) => {
    const newparams = parametre
    for (let i = 0; i < newparams.length; i++) {
        for (let j = i + 1; j < newparams.length; j++) {
            if (newparams[i].charCodeAt(0) === newparams[j].charCodeAt(0)) {
                const isValid = isAsemArgument(newparams[i], newparams[j])
                if (isValid) {
                    newparams.splice(j, 1)
                    newparams.splice(i, 1)
                    i--
                }
            }
        }
    }
    return newparams
}


const getIntruder = () => {
    const isValid = isValidLength(getParametre())

    if (!isValid) {
        return
    }

    return searchIntruder(isValid)
}

console.log(getIntruder())