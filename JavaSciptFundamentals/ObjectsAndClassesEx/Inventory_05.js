function inventory(arr) {
    let heroes = [];
    for(let curHero of arr) {
        let [hero, level, items] = curHero.split(" / ");
        level = Number(level);
        let heroObj = { hero, level, items};
        heroes.push(heroObj);
    }
    let sortedHeroes = heroes.sort((a,b) => a.level - b.level);
    sortedHeroes.forEach(hero => {
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);