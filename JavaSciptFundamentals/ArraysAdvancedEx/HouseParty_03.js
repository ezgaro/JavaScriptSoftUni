function manageGuests(arr) {
    let guests = [];

    for(let i = 0; i < arr.length; i++) {
        let parts = arr[i].split(' ');
        let name = parts[0];
        let action = parts[2];

        if(action === 'going!') {
            if(guests.includes(name)) {
                console.log(name + ' is already in the list!');
            } else {
                guests.push(name);
            }
        } else {
            if(!guests.includes(name)) {
                console.log(name + ' is not in the list!');
            } else {
                guests = guests.filter(guest => guest !== name);
            }
        }
    }

    for(let i = 0; i < guests.length; i++) {
        console.log(guests[i]);
    }
}

manageGuests(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!']);