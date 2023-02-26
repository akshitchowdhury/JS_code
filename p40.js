

function examine(int1,int2){

    var add = int1+int2;
    var diff = int1-int2;
    if(int1==8||int2==8){
        
        console.log("One of the integers is 8")
    }

    else if(add==8||diff==8){

        console.log("Their computation result is 8")
    }

    else{
        console.log("No luck.")
    }
}



examine(8,10)

examine(80,8)

examine(8,0)

examine(4,4)

examine(12,4)

examine(10,100)