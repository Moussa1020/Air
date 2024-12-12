const getParametre = () => {
    const parametre = process.argv.slice(2)
    return parametre
}

const isValidLength = (parametre) =>{
    if (parametre.length > 1) {
        return console.log("nombre d'argument incorrect, il faut 1 argument")
    } else {
        return parametre
    }
}

const oneAtAtime = (parametre) => {
    const newparams = parametre[0]
    let result = ""
    for (let i = 0; i < newparams.length; i++) {
            if (newparams[i] !== newparams[i+1]) {
                result += newparams[i]
            }
    }
    return result
}

const getOneAtAtime = () => {
    const isValidArgument = isValidLength(getParametre())

    if(!isValidArgument){
        return
    }

    return oneAtAtime(isValidArgument)
}

console.log(getOneAtAtime())