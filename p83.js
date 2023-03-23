function long_string(s1,s2,s3){

    var arr = [s1.length,s2.length,s3.length]

    let long = 1

    for(var i =0; i<arr.length; i++){


        if(arr[i]>long){

            long = arr[i]
        }
    }

    return long

}


console.log(long_string("dog","topper", "zoom"))