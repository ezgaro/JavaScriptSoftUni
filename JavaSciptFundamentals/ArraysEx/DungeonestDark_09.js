function dungeonestDark(arr) {
    let roomsInfo = arr.shift();
    let rooms = roomsInfo.split('|');
    let health = 100;
    let coins = 0;
    let bestRoom = 1;
    for(let room of rooms) {
        let tokens = room.split(' ');
        let command = tokens[0];
        let num = Number(tokens[1]);
        if(command === "potion") {
            let healthHealed = num;
            if(health + healthHealed > 100) {
                healthHealed = 100 - health;
            }
            health += healthHealed;
            console.log(`You healed for ${healthHealed} hp.`);
            console.log(`Current health: ${health} hp.`)
        } else if(command === "chest") {
            coins += num;
            console.log(`You found ${num} coins.`);
        } else {
            let monsterName = command;
            let monsterAttack = num;
            health -= monsterAttack;
            if(health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
        bestRoom++;
    }
    if(health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest100|boss 70|chest 1000"]);