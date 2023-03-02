// JavaScript program to create a new string of specified copies of a given string.

function str_copies(str,copies){

    var s = ""
    for(var i=0; i<copies; i++){

        s =s+str
        
    }

    console.log(s)
}

str_copies("lemon",3)