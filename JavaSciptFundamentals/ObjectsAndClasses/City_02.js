function city(obj) {
    for(let el of Object.entries(obj)) {
        console.log(el[0] + " -> " + el[1]);
    }
}

city({

name: "Plovdiv",

area: 389,

population: 1162358,

country: "Bulgaria",

postCode: "4000"

});