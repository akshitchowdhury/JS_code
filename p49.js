
var stack = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


function machine(word){

    // var word = "python"
    var arr = word.split("")
    var blnk = ""

    for(var i=0; i<word.length;i++){
        for(j=0; j<stack.length;j++){

            if(arr[i]==stack[j]){

                var temp = stack[j+1]
                 
                 blnk = blnk+temp

                                
            }
        }
    }
    console.log(blnk)
}

machine("python")


machine("pykon")


machine("apple")


machine("nikon")