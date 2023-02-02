var shape = function(side1,side2,side3,side4){

//takes input as sides and returns according to the if-else conditions set




if(side1,side2,side3,side4!==null){

    console.log("The given shape is a 3D object(Quadrilateral) with sides: ",side1,"cm", " ",side2,"cm", " ",side3,"cm"," ", side4,"cm")
    var perimeter = function(side1,side2,side3,side4){
        return side1+side2+side3+side4
    }
    console.log("The perimeter of the 3D object is : ", perimeter(side1,side2,side3,side4))

}
else if(side1,side2,side3!=null){

    console.log("The given shape is a 3D object(Triangle) with sides: ",side1,"cm", " ",side2,"cm", " ",side3,"cm")

    var perimeter = function(side1,side2,side3,side4){
        return side1+side2+side3+side4
    }
    console.log("The perimeter of the 3D object is : ", perimeter(side1,side2,side3,side4))
}



else if(side1, side2 != null){

    console.log("The given shape is a 2D object with sides: ",side1,"cm", " ",side2,"cm")
    var perimeter = function(side1,side2,side3,side4){
        return side1+side2+side3+side4
    }
    console.log("The perimeter of the 3D object is : ", perimeter(side1,side2,side3,side4))

}
else if(side1!= null ){

    console.log("The given shape is a 1D object with sides: ",side1,"cm")
    var perimeter = function(side1,side2,side3,side4){
        return side1+side2+side3+side4
    }
    console.log("The perimeter of the 3D object is : ", perimeter(side1,side2,side3,side4))


}
} 

shape(10,11,null,null)
shape(342,211,56,null)
shape(90,11,78,100)
shape(12,null,null,null)