window.name = "Ankit"   
let data = 100;

function ScopingData() {
    for(let i = 0; i < 1; i++) {
        let name = "ABC"
        console.log(i); 
        console.log(name)  
    } 
}

console.log(data)
ScopingData();