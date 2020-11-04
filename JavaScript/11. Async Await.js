// Working with ASYNC & AWAIT

var myPromise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve('Executed...');
    },3000)
})
async function invokingPromise() {
    await myPromise.then((data)=>{
        console.log(data);
    })
    console.log('Execution completed....')
}
invokingPromise();