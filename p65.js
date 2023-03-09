

function script_test(str){

    if(str.length>=6 && str.slice(str.length-6)=="Script"){

        return true

    }

    else{

        return false
    }

}


console.log(script_test("JavaScript"))


console.log(script_test("TyperScript"))


console.log(script_test("Funko"))


console.log(script_test("Script"))