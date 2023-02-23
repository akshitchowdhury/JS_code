//Return a modified string from a given String where the modified string wil have its 1st character added to the front and back of the original String

function mod(given) {


    var seperate = given.charAt(0)

    return seperate + given + seperate
}

console.log(mod("Swagger"))

