function div(n1,n2,divisor){

    if((n1%divisor==0&&n2%divisor==0||n1%divisor!=0 && n2%divisor==0)){

        return "similar"


    }

    
        return "not similar"
    

}


console.log(div(45,27,9))


console.log(div(19,27,9))

console.log(div(10,20,4))
