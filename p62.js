// Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three



function last3(str){

    let len = str.length

    if(len>=3){

        var piece = str.slice(len-3)

        return piece+str.slice(0,len-3)
    }

    else{
        return false
    }
}

console.log(last3("Python"))


console.log(last3("Pyt"))


console.log(last3("Javascript"))


console.log(last3("Py"))