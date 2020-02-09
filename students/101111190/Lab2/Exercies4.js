const delayedPromise = time => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('done!');
            resolve(time * time);
        }, time);
    });
}
delayedPromise(5)
.then(result => console.log(result))


// task2

async function asyncPromise(time) {
    var result = await new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(time * time);
        }, time);
    });
    return result
}
asyncPromise(6)
.then(result => console.log(result))
