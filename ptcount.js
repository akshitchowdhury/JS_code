

function pt(str){

    // var str = "potato"
    var arr = str.split("")

    var pstore = ""
    var tstore = ""
    for(var i =0; i< arr.length;i++){

        if(arr[i]=="p"){

            pstore = pstore+arr[i]
        }

        else if(arr[i]=="t"){
            tstore = tstore+arr[i]
        }
    }
    
    var plen = pstore.split("").length

    var tlen = tstore.split("").length

    if(plen==tlen){

        console.log("Equal p's ad t's")
    }

    else{
        console.log("unequal p's ad t's")
    }
}

pt("potato")


pt("potatop")


pt("popatutatop")


pt("pot")


pt("potatoppp")