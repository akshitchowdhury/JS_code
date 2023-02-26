// Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40. 

function greater_number(in1,in2,in3){

    if(in1==in2&& in2==in3 && in3==in1){
        return 30
    }

    else if(in1==in2|| in2==in3||in3==in1){
        return 40
    }

    else{
        return 20
    }
}

console.log(greater_number(10,10,10))

console.log(greater_number(10,10,100))

console.log(greater_number(10,1,32))

console.log(greater_number(1,10,10))

console.log(greater_number(10,0,10))