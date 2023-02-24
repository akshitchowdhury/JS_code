var piece = "javascript"
function check(word){

    if(word.substring(4,word.length)=="script"){
        console.log( word.substring(0,4))
    }
    else{
        console.log(word)
    }
}

check("typerscript")

check("typescript")

check("Coffeescript")

check("abrascript")
