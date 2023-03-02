
// Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.

function format_num(num1,num2){


    let div = num1/num2

     let res = Math.round(div)

     return res.toString().split("")
}



console.log(format_num(80,6))


console.log(format_num(80,33))