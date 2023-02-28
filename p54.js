// Write a JavaScript program to count the number of vowels in a given string.


function vow_count(str){
    

    var arr = str.split("")
    
    var vowel = "aeiou"

    var v2 = vowel.split("")
    var count = 0;
    for(var i=0; i<arr.length;i++){
        for( var j =0; j<v2.length;j++){

            if(arr[i]== v2[j]){

                
                count = count+1+""
                var signal = true

            
            }
        }
    }  
    
let neo = count.toString().split("").length
if(signal==true){
    return neo

}
else{
    return "no vowels found"
}

}
console.log(vow_count("apple"))

console.log(vow_count("aeiou"))

console.log(vow_count("umbrella"))

console.log(vow_count("mbrll"))


console.log(vow_count("splmnbvxzrtyh"))


