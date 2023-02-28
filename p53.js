// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

function a_b(str){

    var arr = str.split("")
    for(var i=0; i<arr.length;i++){

        if(arr[i]=='a'&& arr[i+4]=='b'){

                var a = true
        }

        
        
    }

    if(a==true){
        return a
    }

    else{
        return false
    }
    
}

console.log(a_b("anpib"))


console.log(a_b("styanpib"))


console.log(a_b("typanpib"))


console.log(a_b("standeb"))


console.log(a_b("anpiub"))

console.log(a_b("abCheck"))

