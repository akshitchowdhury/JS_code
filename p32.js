// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values


var checker = function(input1, input2){



    if((input1<100)&&(input2<100)&&(input1!=input2)){

        if(input1<input2){
            console.log(input2,"closest to 100")
        }
        else{
            console.log(input1,"closest to 100")
        }
    }





    else{
        console.log("Too big to execute")
    }
}


checker(100,20)

checker(10,200)

checker(10,20)

checker(89,70)
checker(-19,-21)

checker(20,20)

