// Write a JavaScript program to create a new string without the first and last character of a given string.

function word(str){

    return str.slice(1,str.length-1)
}

console.log(word("Python"))