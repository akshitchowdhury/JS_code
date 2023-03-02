// Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.

function last_3(str){

    let copies = 4

    let len = str.length
    let piece = str.slice(len-3)
    let s =""
if(len>=3){
    for(var i=0; i<copies; i++){
        s = s+piece
    }

    console.log(s)
}
else{
    console.log("too little") 
}
}

last_3("Python")

last_3("Lemon")

last_3("Lem")

last_3("Le")
