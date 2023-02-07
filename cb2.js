var caller = function(){   //-->This is main function

   //1st setTimeout func  nside main function
    
   setTimeout(function(){   //-->1st param as sub function of 1st setTimeout func

        
          //cb2() created containing 2nd setTimeout func
         var cb2 = function (){
            
            //2nd setTimeout function within cb2 function  
            setTimeout(function(){
                      console.log("Thisis cb2 under 2 secs")
                 }, 2000)
        }
        cb2();


        console.log("Hello this is cb1 under 3 secs");
    }, 3000)  //-->2nd param as timer of 1st setTimeout func)
}

caller()  //--> caller function called