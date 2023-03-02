// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.


function mid_3(str){



    let len = str.length

    let mid = len/2

    let odd = len%2
if(len>=3){

    if(odd==1){

        return str.slice(mid-1,mid+2)
    }

    else{
        return false
    }


}
else{
    return "Too less of a length"
}
    
}

console.log(mid_3("python"))


console.log(mid_3("pythons"))


console.log(mid_3("javascripts"))


console.log(mid_3("priti"))

console.log(mid_3("priti"))
