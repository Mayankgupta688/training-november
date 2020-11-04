(function() {

    var data = [1, 10, 11, 12, 45]

    function showData(a, ...b) {
        debugger;
        console.log(a + b);
    }

    showData(...data)

})()