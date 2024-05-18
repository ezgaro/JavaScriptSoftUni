function theHuntingGame(input) {
    let days = Number(input[0]);
    let players = Number(input[1]);
    let energy = Number(input[2]);
    let waterPerDayForOnePerson = Number(input[3]);
    let foodPerDayForOnePerson = Number(input[4]);

    let totalWater = days * players * waterPerDayForOnePerson;
    let totalFood = days * players * foodPerDayForOnePerson;
    let flag = true;

    for (let i = 0; i < days; i++) {
        let energyLoss = Number(input[i + 5]);
        energy -= energyLoss;

        if (energy <= 0) {
            flag = false;
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            break;
        }

        if ((i + 1) % 2 === 0) {
            energy += energy * 0.05;
            totalWater -= totalWater * 0.3;
        }

        if ((i + 1) % 3 === 0) {
            energy += energy * 0.1;
            totalFood -= totalFood / players;
        }
    }

    if(flag) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }
}


