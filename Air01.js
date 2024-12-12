const getParametre = () => {
    const parametre = process.argv.slice(2)
    return parametre
}

const isValidLength = (parametre) =>{
    if (parametre.length > 2) {
        return console.log("nombre d'argument incorrect, il faut 2 argument")
    } else {
        return parametre
    }
}

const isAsemargument = (firstArgument, secondArgument) => {
    let isSem = true
    for (let i = 0; i < secondArgument.length; i++) {
        if (firstArgument[i].charCodeAt(0) !== secondArgument[i].charCodeAt(0)) {
            isSem = false
        }
    }
    return isSem
}

const findIndex = (parametre) => {
    const firstArgument = parametre[0]
    const secondArgument = parametre[1]
    let criterIndex = []
    let test = ""
    let iscriter = false
    for (let i = 0; i < firstArgument.length; i++) {
        if (firstArgument[i].charCodeAt(0) === 32 || firstArgument[i].charCodeAt(0) === 9 || firstArgument[i].charCodeAt(0) === 10) {
            for (let j = i+1; j < secondArgument.length + (i+1); j++) {
                test += firstArgument[j]
            }
            iscriter = isAsemargument(test, secondArgument)
            test = ""
            if (iscriter) {
                criterIndex.push(i+1)
            }
        }

    }
    return [firstArgument, criterIndex]
}

const splitFunction = (parametre) => {
    const newparams  = parametre[0]
    const nexIndex = parametre[1]
    let result = []
    let element = ""
    for (let i = 0; i < newparams.length; i++) {
        element += newparams[i]
        if (i === nexIndex[0] - 1) {
            result.push(element)
            element = ""
            i += 2
        } else if (i === newparams.length - 1) {
            result.push(element)
        }
    }
    return result
}

console.log(splitFunction(findIndex(isValidLength(getParametre()))))