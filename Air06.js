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

const intoLowerCase = (argument) => {
    const newArgument = argument
    let inLower = ""
    for (let i = 0; i < newArgument.length; i++) {
        if (newArgument[i].charCodeAt(0) >= 65 && newArgument[i].charCodeAt(0) <= 90) {
            inLower += String.fromCharCode(newArgument[i].charCodeAt(0) + 32) 
        } else {
            inLower += newArgument[i]
        }
    }
    return inLower
}

const isAsemArgument = (firstArgument, secondArgument) => {
    let isSem = true
    for (let i = 0; i < firstArgument.length; i++) {
        if (firstArgument[i].charCodeAt(0) === secondArgument[0].charCodeAt(0)) {
            isSem = false
        }
    }
    return isSem
}

const passControl = (parametre) => {
    const name = parametre.slice(0,-1)
    const critere = parametre.slice(-1)
    let isPastControl = []
    for (let i = 0; i < name.length; i++) {
        let firstArgument = intoLowerCase(name[i])
        let secondArgument = intoLowerCase(critere)
        const isPast = isAsemArgument(firstArgument, secondArgument)
        if (isPast) {
            isPastControl.push(name[i])
        }
    }
    return isPastControl
}

const getPassControl = () => {
    const isValidLengt = isValidLength(getParametre())

    if (!isValidLengt) {
        return
    }

    return passControl(isValidLengt)
}

console.log(getPassControl())

