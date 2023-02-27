// Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode. 


function mode_check(in1,in2,in3){

    if(in3>in2&&in3>in1){

        if((in1<in2)&&(in2<in3)&&(in1<in3)){
            return "Follows strict mode of increasing"
        }

        if((in1==in2&& in1<in3)||((in1>in2)&&(in2<in3)&&(in1<in3))){

            return "Follows soft mofe of increasing"
        }
    }

    else{
        return "not increasing"
    }
}

console.log(mode_check(1,5,9))

console.log(mode_check(1,1,9))

console.log(mode_check(109,545,8))

console.log(mode_check(1,50,9))