addDeatils()

function addDetails() {
    addDataInBackground(callbackFunction())
    setTimeout(function() {
        getData();
    }, 100)
}