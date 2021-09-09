async function divideAsync(x, y) {

    let promise = new Promise(function (resolve, reject) {

        if (y == 0) {

            let err = new Error("Divide by Zero Error");

            reject(err);

        } else {

            let result = x / y;

            resolve(result);

        };

    });

    try {

        let result = await promise;

        console.log(result);

    } catch (err) {

        console.log("Error occoured :", err);

    }

};



divideAsync(4, 2);