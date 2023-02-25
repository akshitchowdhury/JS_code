
// Write a JavaScript program to check whether the last digit of the three given positive integers is same.


function checker(int1,int2,int3){


    var st1 = int1.toString();
    const final1 = st1.length-1;

    var st2 = int2.toString();
    const final2 = st2.length-1;
    
    var st3 = int3.toString();
    const final3 = st3.length-1;

    if((int1>0 && int2>0 &&int3>0)){

    

    if((st1.charAt(final1)==st2.charAt(final2))&&(st2.charAt(final2)==st3.charAt(final3))&&(st3.charAt(final3)==st1.charAt(final1))){

        console.log("They all are matching in the last digit.","The last digit matched is : ", st1.charAt(final1))
    }

    else{
        console.log("Umatching units")
    }
    
}

else{
    console.log("There's a -ve number included")
}
}
checker(21,79321,905731)

checker(2,79322,905731)

checker(21,79321,9057316)

checker(218759364,79324,905734)


checker(218759364,79324,-905734)
