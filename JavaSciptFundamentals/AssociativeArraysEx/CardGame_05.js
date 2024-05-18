function cardGame(players) {
    let playersData = {};

    for (let player of players) {
        let [name, cards] = player.split(': ');
        cards = cards.split(', ');

        if (!playersData[name]) {
            playersData[name] = new Set();
        }

        for (let card of cards) {
            playersData[name].add(card);
        }
    }

    for (let [name, cards] of Object.entries(playersData)) {
        let totalValue = 0;

        for (let card of cards) {
            let power = card.slice(0, -1);
            let type = card.slice(-1);

            switch (power) {
                case 'J': power = 11; break;
                case 'Q': power = 12; break;
                case 'K': power = 13; break;
                case 'A': power = 14; break;
                default: power = Number(power);
            }

            switch (type) {
                case 'S': type = 4; break;
                case 'H': type = 3; break;
                case 'D': type = 2; break;
                case 'C': type = 1; break;
            }

            totalValue += power * type;
        }

        console.log(`${name}: ${totalValue}`);
    }
}

cardGame([
    "Peter: 2C, 4H, 9H, AS, QS",
    "Tomas: 3H, 10S, JC, KD, 5S, 10S",
    "Andrea: QH, QC, QS, QD",
    "Tomas: 6H, 7S, KC, KD, 5S, 10C",
    "Andrea: QH, QC, JS, JD, JC",
    "Peter: JD, JD, JD, JD, JD, JD",
]);