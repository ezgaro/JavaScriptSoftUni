function town(arr) {
    class Town{
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;

            this.obj = {
                town: this.town,
                latitude: this.latitude,
                longitude: this.longitude,
            }
        }

        printObject() {
            return this.obj;
        }
    }

    for(let town of arr) {
        let [townName, townLatitude, townLongitude] = town.split(" | ");
        let townDetails = new Town(townName, Number(townLatitude).toFixed(2) , Number(townLongitude).toFixed(2));
        console.log(townDetails.printObject());
    }
}
town(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);