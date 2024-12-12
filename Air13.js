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




