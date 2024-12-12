const fs = require("fs")

const getParametre = () => {
    const parametre = process.argv.slice(2)
    return parametre
}

const isValidLength = (parametre) =>{
    if (parametre.length !== 1) {
        return console.log("nombre d'argument incorrect, il faut 1 argument")
    } else {
        return parametre
    }
}

const showContent = (argument) => {
    const newArgument = argument;
    fs.readFile(`${newArgument}`, "utf-8", (err, data) => {
        console.log(data)
    })
}

const getShowContent = () => {
    const isValidLengt = isValidLength(getParametre())

    if (!isValidLengt) {
        return
    }

    showContent(isValidLengt)
}

getShowContent()