function tester(given){

    if(given>0){

        if(given==21){
            console.log("The numbe",given,"is a multiple of both 3 and 7")
        }
        
        else if(given%7==0){
            console.log("The numbe",given,"is a multiple of 7")
        }

        else if(given%3==0){
            console.log("The number",given,"is a multiple of 3")
        }

        else{
            console.log("Its a lost cause")
        }
    }
}




tester(70)
tester(21)

tester(6)

tester(28)

tester(15)

tester(2)