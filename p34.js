// Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.


function check(input,word){

     

    var piece = word.substring(1,4)
    
      

    for(var i =0;i<word.length;i++){

        
       
        if(input==piece.charAt(i)){
            
           var res = `${"the given piece of word is found at"}${i} ${"position"}`
           console.log(res)
         break;   
        }

        // else{
        //     console.log("outta bounds")
        //     break;
        // }



        
    }

    if(input.charAt(0)!=piece.charAt(i)){
        console.log("outta bounds")
    }
    
}


check("v","javascript")

check("a","javascript")

check("j","javascript")

check("s","javascript")


