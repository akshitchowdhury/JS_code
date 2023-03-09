

function concact(st1,st2){


    if(st1.length>st2.length){
        return st1
    }
    else if(st1.length<st2.length){

        return st2
    }

    else if(st1.length==st2.length){
        return st1+st2
    }
}

console.log(concact("apple","banana"))

console.log(concact("pot","tom"))


console.log(concact("potato","tom"))