var randomNumberGenerator = Rx.Observable.create(function(observer){
    observer.next(10);
    setTimeout(() => {
        observer.next(20)
    });
    observer.next(30)
})

randomNumberGenerator.subscribe((data) => {
    console.log(data)
})