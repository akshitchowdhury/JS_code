
var last_digit= function(in1,in2,in3){

    var s1 = in1.toString()
    var s2 = in2.toString()
    var s3 = in3.toString()

    if((s1.charAt(s1.length-1)==s2.charAt(s2.length-1)) ||(s3.charAt(s3.length-1)==s2.charAt(s2.length-1))||(s3.charAt(s3.length-1)==s1.charAt(s1.length-1)) ){

        return "The last digit is in synch"
    }

    else{
        return "They are different"
    }
} 


console.log(last_digit(123,546,09423))

console.log(last_digit(1234,54634,09423))

console.log(last_digit(123,5463,094230))

console.log(last_digit(12387321,5463142,28))
