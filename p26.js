//Picking last 3 pieces of the given string and adding it to front and back

function mode(given){


    var tri = given.substring(given.length-3, given.length)

    console.log(tri+given+tri)
}

mode("HELLBOY")