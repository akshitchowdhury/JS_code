function city(str){

    if(str.slice(0,3)== "Los"|| str.slice(0,3)=="New"){
        return str
    }

    else{

        return "blank"
    }
}

console.log(city("LosAngeles"))


console.log(city("NewYork"))


console.log(city("LosGambit"))


console.log(city("Newage"))


console.log(city("Angeles"))