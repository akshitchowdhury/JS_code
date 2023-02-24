// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range

function trio(in1,in2,in3){

    if((in1>=50 && in1<=99)||(in2>=50 && in2<=99)||(in3>=50 && in3<=99)){

        return true
    }

    else{
        return false
    }
}

console.log(trio(50,60,70))

console.log(trio( 45,60,70))

console.log(trio(50,10,70))

console.log(trio(50,600,100))

console.log(trio(505,605,700))