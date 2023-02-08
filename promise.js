const sum = (x,y)=>{

    const promise = new Promise((resolve,reject)=>{

        if(typeof x!== 'number' || typeof y!=='numbgiter'){

            return reject(new Error("Both arguments are not numbers"))
        }

        setTimeout(()=>{
            resolve(x+y)
        }, 2000)

        



    })
    return promise;
}

const prom = sum(20,30)

prom.
then(function(result){
    console.log(result)
})
.catch(error=>{
    console.log(error.message)
})