function commonElements(arr1 , arr2) {
    for(let word1 of arr1) {
        for(let word2 of arr2) {
            if(word1 === word2) {
                console.log(word1);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']);