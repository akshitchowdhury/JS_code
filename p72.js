
function first_last(n1,n2,n3){

    const arr = [n1,n2,n3]


    if(arr[0]==arr[arr.length-1]){

        return true
    }

    else{

        return false
    }
}

console.log(first_last(21,4,21))


console.log(first_last(21,4,213))