
function createPromise() {

    var customPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            setTimeout(function() {
                resolve("Promise is rejected...")
            }, 1000)
        }, 3000)
    });

    return customPromise;
}


function customData() {

    var salutation = "";

    var customPromise = createPromise();

    customPromise.then(function(data) {
        console.log(data)
    }, function(failure) {
        console.log(failure)
    })

    customPromise.then(function(data) {
        console.log("Promise Resolved...")
    }, function(failure) {
        console.log(failure)
    })

    customPromise.then(function(data) {
        console.log("Promise Resolved...")
    }, function(failure) {
        console.log(failure)
    })

    customPromise.then(function(data) {
        console.log("Promise Resolved...")
    }, function(failure) {
        console.log(failure)
    })

    console.log("Salutation: " + salutation)
}

customData();