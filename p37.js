// Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case. 




function machine(word){

    if(word.length>3){

        var piece = word.substring(0,3)

        console.log(piece.toLowerCase()+ word.substring(3,word.length))  
    }

    else{
       console.log(word.toUpperCase()) 
    }
}

machine("PINEAPPLE")

machine("pin")

machine("ass")

machine("pINAcOLADA")