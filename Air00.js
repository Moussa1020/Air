function getArgument() {
    const argument = process.argv.slice(2)
    return argument
}

function isValidLength(argument) {
    if (argument.lengt > 1) {
        return console.log("Il faut 1 seul argument")
    } else {
        return argument
    }
}

function split(argument) {
    const newArgument = argument;
    let argumentSplit=[];
    let result = ""
    for (let i = 0; i < newArgument[0].length; i++) {
        result += newArgument[0][i]
        if (newArgument[0][i].charCodeAt(0) === 32 || newArgument[0][i].charCodeAt(0) === 9 || newArgument[0][i].charCodeAt(0) === 10) {
            argumentSplit.push(result);
            result = ""
        } else if (i === newArgument[0].length - 1){
            argumentSplit.push(result)
        }
    }
    return argumentSplit
}

function getSplit() {
    const result = isValidLength(getArgument())
    if(!result){
        return
    }
    return split(result)
}

console.log(getSplit())