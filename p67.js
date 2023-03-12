
function p_check(str){

    if(str.charAt(0)=="P"&& str.charAt(str.length-1)=="p"){

        return str.slice(1,str.length-1)
    }
    
    else if(str.charAt(0)=="P" ){

        return str.slice(1)
    }

    else if(str.charAt(str.length-1)=="p"){

        return str.slice(0,str.length-1)
    }

    
    
    else{
        return str
    }
}


console.log(p_check("Pythonp"))


console.log(p_check("Potato"))


console.log(p_check("otatop"))


console.log(p_check("Tomato"))


console.log(p_check("Potatop"))