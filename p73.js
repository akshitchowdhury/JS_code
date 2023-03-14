function reverse(n1,n2,n3){

var arr = [n1,n2,n3]
var s = ""
    for(var i = arr.length-1; i>=0; i--){
      
        s = s+ arr[i]

    }

    st1 = s.slice(0,2)
    st2 = s.slice(2,3)
    st3 = s.slice(s.length-2)

     var rev = [st1,st2,st3]
     console.log(rev) 
           

}

reverse(21,4,65)