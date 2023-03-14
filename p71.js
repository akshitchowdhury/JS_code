function one(n1,n2,n3,n4){

    const arr = [n1,n2,n3,n4]

    if(arr[0]==1 || arr[arr.length-1]==1){

        return true
    }

    else{
        return false
    }
}

console.log(one(1,34,56,7))


console.log(one(9,34,56,1))


console.log(one(13,34,56,7))