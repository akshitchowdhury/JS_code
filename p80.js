function swap(num1,num2,num3){

    var arr=[num1,num2,num3]

    var temp

    temp = arr[0]

    arr[0] = arr[arr.length-1]

    arr[arr.length-1] = temp

    console.log(arr)
}


swap(20,43,10)