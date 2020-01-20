function delayedPromise(num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('done!')
            resolve(num*num)
        },500)
    })
}


async function asyncPromise(num){
    const result = await delayedPromise(num)
    return result
}

asyncPromise(6)
    .then(result=>console.log(result))

