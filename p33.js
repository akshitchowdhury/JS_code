// Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive

const range_check = function(in1,in2){
    if((in1>40&&in1<60)&&(in2>40 && in2<60)){

        console.log(in1,in2,"falls in the range 40 and 60")
    }

    else if ((in1>70&&in1<100)&&(in2>70 && in2<100)){
        console.log(in1,in2,"falls in the range 70 and 100")
    }

    else{
        console.log("THe numbers fall in a differet dimension. ")
    }
}

range_check(42,45)

range_check(99,72)

range_check(99,10)

range_check(9,72)

range_check(991,722)

