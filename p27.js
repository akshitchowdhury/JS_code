//Write a JavaScript program to check whether a string starts with 'Java' and false otherwise


var word = "JAVAscript"

function checker(insert){

    if(insert.substring(0,4)== "JAVA"| insert.substring(0,4)=="java"){
        return true
    }

    else{
        return false
    }
}


console.log(checker("javascript"))