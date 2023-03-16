function first_last(n1,n2,n3,p1,p2,p3){

    var arr = [n1,n2,n3]

    var brr = [p1,p2,p3]

    for(var i=0; i<arr.length ; i++){

for(var j = 0; j<brr.length; j++){


        if((i==0 && j==0) ){

            var narr = [arr[i], brr[j]]

            console.log(narr[0],narr[1])

        }


    }

            
        }


        
    //     console.log(narr)
    
}

    

first_last(12,43,1,54,65,43)