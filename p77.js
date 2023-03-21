function artest(n1,n2,n3){

    let arr = [n1,n2,n3]

    for(var i =0; i<arr.length; i++){

        var store1, store3, storef
        if(arr[i]==1){

           store1 = arr[i]
            
        }

        else if(arr[i]==3){

            store3 = arr[i]
            
        }

        else{
            storef= false
        }
    }

    if(store1==1){
        return true
    }

    else if(store3==3){
        return true
    }

    else{
        return false
    }

}


console.log(artest(1,34,67))


console.log(artest(13,3,67))


console.log(artest(16,34,67))


console.log(artest(16,34,3))