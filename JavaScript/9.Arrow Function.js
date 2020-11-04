function getData(name, age) {
    console.log("User Data: " + name + " " + age)
}

var getDataLambda = (name, age) => {
    age = age + 10;
    return `User Data: ${name} ${age + 10}`;
}

getDataLambda("Mayank", 20)