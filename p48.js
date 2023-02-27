// Write a JavaScript program to reverse a given string

//via string method
function reverse(string){

    var arr = string.split("")

    var rev = arr.reverse()

    var output = rev.join("")

    return output
}

console.log(reverse("Apple"))

console.log(reverse("Fatboy"))

//via iteration
function reverse_iteration(string){

    var j = ""
    for(var i =string.length-1; i>=0; i--){

             j= j+ string.charAt(i)
    }

    return j
}

console.log(reverse_iteration("Apple"))

console.log(reverse_iteration("Fatboy"))