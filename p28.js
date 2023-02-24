//Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.


// function input(in1,in2){

//     if(in1>50&&in1<99){
//         return true
//     }

//     else if(in2>50 && in2<99){

//         return true
//     }

//     else{
//         return false
//     }
// }

// console.log(input(55,100))

// console.log(input(555,70))

// console.log(input(67,80))

// console.log(input(10,100))

//Modified version of code


function mod(in1,in2){

    if((in1>=50 && in1<=99)||(in2>=50 && in2<=99)){
        return true
    }

    else{
        return false
    }
}

console.log(mod(55,100))

console.log(mod(555,70))

console.log(mod(67,80))

console.log(mod(10,100))