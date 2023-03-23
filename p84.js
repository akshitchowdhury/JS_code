
var alpha = "abcdefghijklmnopqrstuvwxyz"

var aplha2= alpha.split("")

function next_alpha(str){

    var s =""
    var temp = 0
    for(var i=0; i<str.length; i++){

        for(var j=0; j<aplha2.length; j++){

            if(str[i]==aplha2[j]){

                temp = aplha2[j+1]

            
            
            s= s+temp
            
            }
            
        }
    }

    console.log(s)
}

next_alpha("potato")


next_alpha("zoom")


next_alpha("poop")


