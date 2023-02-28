

var capitalise  = function(str){

    var str = str.split(" ")

    for(var i =0; i<str.length; i++){


        str[i]= str[i][0].toUpperCase()+ str[i].substring(1)
    }

    return str.join(" ")

}

console.log(capitalise("lemon juice is a good drink"))

