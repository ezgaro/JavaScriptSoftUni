function echoType(value) {
    if(typeof value === "string" ) {
        console.log("string");
        console.log(value);
    } else if(typeof value === "number") {
        console.log("number");
        console.log(value);
    } else {
        console.log("object");
        console.log("Parameter is not suitable for printing");
    }
}