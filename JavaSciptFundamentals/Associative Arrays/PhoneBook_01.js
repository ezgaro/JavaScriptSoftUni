function phoneBook(input) {
    let obj = {};
    for (const el of input) {
        let [name, number] = el.split(' ');
        obj[name] = number;
    }

    for(const el of Object.entries(obj)) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);