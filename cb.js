//applying callbak on a simple multiplication of two numbers


var cross= function(x,y,cb){

    setTimeout(function(){

             console.log(x*y)
    }, 2000)
}

console.log(cross(3,4,function(result){

    console.log(result)
}))