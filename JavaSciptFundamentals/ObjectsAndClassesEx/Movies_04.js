function movies(arr) {
    let movies = [];
    for (command of arr) {
        if(command.includes("addMovie")) {
            let comArr = command.split("addMovie ");
            let filmName = comArr[1];
            let movieObj = {name : filmName};
            movies.push(movieObj);
        } else if(command.includes("directedBy")) {
            let comArr = command.split(" directedBy ");
            let filmName = comArr[0];
            let directorName = comArr[1];
            
            let movieFound = movies.find(m => m.name === filmName);
            if(movieFound) {
                movieFound.director = directorName;
            }
        } else if(command.includes("onDate")) {
            let comArr = command.split(" onDate ");
            let filmName = comArr[0];
            let date = comArr[1];
            
            let movieFound = movies.find(m => m.name === filmName);
            if(movieFound) {
                movieFound.date = date;
            }
        }
    }
    let filterMovies = movies.filter(m => m.name && m.director && m.date);
    filterMovies.forEach(m => console.log(JSON.stringify(m)));
}
movies([

'addMovie Fast and Furious',

'addMovie Godfather',

'Inception directedBy Christopher Nolan',

'Godfather directedBy Francis Ford Coppola',

'Godfather onDate 29.07.2018',

'Fast and Furious onDate 30.07.2018',

'Batman onDate 01.08.2018',

'Fast and Furious directedBy Rob Cohen'

]);