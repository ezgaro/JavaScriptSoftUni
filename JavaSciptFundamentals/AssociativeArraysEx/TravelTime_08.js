function travelInfo(input) {
    let destinations = {};

    for (let info of input) {
        let [country, town, cost] = info.split(' > ');
        cost = Number(cost);

        if (!destinations[country]) {
            destinations[country] = {};
        }

        if (!destinations[country][town] || destinations[country][town] > cost) {
            destinations[country][town] = cost;
        }
    }

    let sortedCountries = Object.keys(destinations).sort();

    for (let country of sortedCountries) {
        let sortedTowns = Object.entries(destinations[country]).sort((a, b) => a[1] - b[1]);
        let result = `${country} -> `;
        for (let [town, cost] of sortedTowns) {
            result += `${town} -> ${cost} `;
        }
        console.log(result.trim());
    }
}

travelInfo([
    "Bulgaria > Sofia > 25000",
    "aaa > Sofia > 1",
    "aa > Orgrimar > 0",
    "Albania > Tirana > 25000",
    "zz > Aarna > 25010",
    "Bulgaria > Lukovit > 10"
]);