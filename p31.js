// Write a JavaScript program to find the largest of three given integers. 

function checker(in1,in2,in3){

    if((in1>in2)&&(in1>in3)){
        return `${in1} ${"greater number amongst the three"}`
    }

    else if((in2>in1)&&(in2>in3)){
        return `${in2} ${"greater number amongst the three"}`
    }

    else if((in3>in1)&&(in3>in2)){
        return `${in3} ${"greater number amongst the three"}`
    }

    else{
        return "none are great"
    }
}

console.log(checker(20,12,11))

console.log(checker(20,122,11))

console.log(checker(20,12,1123))