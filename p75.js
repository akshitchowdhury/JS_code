
function two_arr(n1,n2,n3,a1,a2,a3){

    var arr = [n1,n2,n3]

    var brr = [a1,a2,a3]

    var m_arr = (arr.length-1)/2

    var m_brr  = (brr.length-1)/2

    for(var i=0; i<arr.length;i++){

        if(arr[i]  = arr[m_arr]){

            var lock1 = arr[i]
        }
    }

    for(var j = 0; j<brr.length;j++){

        if(brr[j]= brr[m_brr]){

            var lock2 = brr[j]
        }
    }

    var narr = [lock1,lock2]

    console.log(narr)
}

two_arr(11,43,2,25,67,98)