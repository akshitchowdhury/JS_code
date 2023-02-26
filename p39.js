// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

function addition_range(int1,int2){

    const sum = int1+int2;

    if(sum>=50 && sum<=80){

        return 65
    }

    else{
        return 80
    }
}

console.log(addition_range(50,10))

console.log(addition_range(50,100))

console.log(addition_range(5,10))

console.log(addition_range(0,75))