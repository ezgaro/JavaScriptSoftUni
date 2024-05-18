function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetBroken = Math.floor(lostFights / 2);
    let swordBroken = Math.floor(lostFights / 3);
    let shieldBroken = Math.floor(lostFights / 6);
    let armorBroken = Math.floor(lostFights / 12);

    let expenses = helmetBroken * helmetPrice + swordBroken * swordPrice + shieldBroken * shieldPrice + armorBroken * armorPrice;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);