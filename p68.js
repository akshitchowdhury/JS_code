
function n_strings(str,n){


    
    const string = str.slice(0,n)+str.slice(str.length-n)

    console.log(string)
}

n_strings("python", 2)


n_strings("python", 3)


n_strings("python", 1)

