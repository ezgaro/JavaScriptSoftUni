function songs(input) {

    class Song{
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let index = 0;
    let arr = [];
    let n = input[index];
    index++;
    while(n-- > 0) {
        let [typeList, name, time] = input[index].split("_"); 
        let song = new Song(typeList, name, time);
        arr.push(song); 
        index++;
    }

    let command = input[index];
    if(command === "all") {
        arr.map(s => console.log(s.name));
    } else {
        let filtered = arr.filter(s => s.typeList === command);
        filtered.forEach(s => console.log(s.name));
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);