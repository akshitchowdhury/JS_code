// Write a JavaScript program to convert the letters of a given string in alphabetical order. 

function arrange(str){

    for(var i=0; i<str.length;i++){

        var neo =str.split("").sort().join("")
    }

    console.log(neo)
}

arrange("lemon")