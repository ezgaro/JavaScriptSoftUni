function heartDelivery(input) {
    let neighborhood = input[0].split('@').map(Number);
    let cupidPosition = 0;

    for (let i = 1; i < input.length; i++) {
        let command = input[i];
        if (command === 'Love!') break;

        let jumpLength = Number(command.split(' ')[1]);
        cupidPosition = (cupidPosition + jumpLength) % neighborhood.length;

        if (neighborhood[cupidPosition] === 0) {
            console.log(`Place ${cupidPosition} already had Valentine's day.`);
        } else {
            neighborhood[cupidPosition] -= 2;
            if (neighborhood[cupidPosition] === 0) {
                console.log(`Place ${cupidPosition} has Valentine's day.`);
            }
        }
    }

    console.log(`Cupid's last position was ${cupidPosition}.`);

    let failedHouses = neighborhood.filter(h => h > 0).length;
    if (failedHouses === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${failedHouses} places.`);
    }
}
heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"]);