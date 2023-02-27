// Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11

function multiple(num1,num2){

    if((num1%7==0||num2%7==0)||(num1%11==0||num2%11==0)){

        return true
    }

    return false;

    
}

console.log(multiple(121,49))

console.log(multiple(143,147))

console.log(multiple(24,100))