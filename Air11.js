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

const checkArgument = (parametre) => {
    const newparams = parametre
    if (parseInt(newparams[0]) !== 0 && parseInt(newparams[1]) < 0) {
        return console.log ("Veuillez entre le nombre d'etage entre 0 et +00")
    } 
    return newparams
}

const getEtage = (parametre) => {
    const newparams = parametre
    let diff = "OO"
    let start = ""
    for (let i = 0; i < newparams; i++) {
        start += diff
    }
    return start
}

const showPyramide = (parametre) => {
    const newparams = parametre
    const pyramide = []
    for (let i = 0; i < parseInt(newparams[1]); i++) {
        if (i === 0) {
            pyramide.push(i)
        } else {
            let etage = getEtage(i)
            etage += "O"
            pyramide.push(etage)
        }
    }

    return pyramide
}

const value = showPyramide(getParametre())

for (let i = 0; i < value.length; i++) {
    console.log(value[i])
}