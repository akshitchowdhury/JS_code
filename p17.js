class cars{

constructor(names, myear){


    console.log(this)
    this.names= names;
    this.myear= myear;
}

age(year){

    

return year-this.myear

}

}

class Automobile extends cars{

constructor(names,myear,alias, model){

    super(names,myear)
    this.alias = alias
    this.model = model
}

details(){

    super.age;
    return `${"The name and model of the car requested is "} ${this.alias} ${this.model}
    
    ${"The age of the car is"} ${this.myear}`
}



}

const auto = new cars("Ford",2012)

auto.age(2023)

const vroom = new Automobile("Ford",2012,"Ford GT","Mustang GT" );

vroom.details

console.log(vroom)

console.log(vroom.details())
