
var etc = (n1,n2)=>{

    const promise = new Promise((resolve,reject)=>{

        if(typeof n1!=='string' || typeof n2!=='string'){
            return reject(new Error("Both n1 and n2 should be strings"))
        }

        setTimeout(()=>{

            resolve(n1+n2)
        }, 2000)  

        
    })
    return promise
}

const exec = etc("Deva", "Shura")

exec.then((result)=>{
    console.log(result)
})
.catch(error=>{
    error.message
})


// execution.then(function(result){
//     console.log(result)
// })
// .catch(error=>{console.log(error.message)})


