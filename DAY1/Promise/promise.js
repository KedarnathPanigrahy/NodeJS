function dividePromise(x, y) {
    let promise = new Promise(function (resolve, reject) {
        if (y == 0) {
            let err = new Error("Divide by Zero Error");
            reject(err);
        } else {
            let result = x / y;
            resolve(result);
        };
    });
    return promise;
};
dividePromise(4, 2)
    .then((result) => {
        // api call 2
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })  
// to show promise.all and promise.race
 let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000);
});
console.log(promise1);
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 2000);
}); 
 Promise.all([promise1, promise2]).then(() => {
    console.log("Both the Promises have been resolved successfully");
}); 
 
/*  Promise.race([promise1, promise2]).then((res) => {
    console.log(`Promise ${res} resolved first!!`)
}); */