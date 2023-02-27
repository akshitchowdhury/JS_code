// Write a JavaScript program to check whether a given number is presents in the range 40..10000. 



function range(integer){


if(integer>=40 && integer<=10000){

    return "true in the range"
}

else{
    return "not i the range"
}
}

console.log(range(10000))


console.log(range(40))


console.log(range(100))


console.log(range(1))