var add = function(x,y,cb){

    setTimeout(function(){
        cb(x+y)
    }, 2000)
}

console.log(add(10,20,function(result){
    console.log(result)
}))