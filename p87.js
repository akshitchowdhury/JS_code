
function arrswap(arr,brr){

    var atemp =0
    var btemp = 0
    var signal
    for( var i =0; i<arr.length; i++){

        for(var j=0; j<brr.length; j++){

            
            if(arr.length==brr.length&&arr[i]==brr[j] ){


                atemp = arr[i]
                btemp = brr[j]

                arr[i] = btemp
                brr[j] = atemp

                signal = true
                

            }
            

            
        }
    }

    if(signal==true){

        return signal
    }
    else{
        return false
    }
    

}

console.log(arrswap([10,20,30],[100,240,50]))


console.log(arrswap([10,20,30],[10,20,30,50]))
