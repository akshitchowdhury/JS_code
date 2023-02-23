const line = "String"

function selector(index){
var s = " "
    for(var i =0;i<line.length;i++){

        if(i!=index){
            s = s+ line.charAt(i)
        }
    }
    console.log(s)
}

selector(2)

selector(4)

selector(1)