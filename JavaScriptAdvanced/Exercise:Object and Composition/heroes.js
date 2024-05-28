function heroes() {
  return {
    mage: (name) => {
      let health = 100;
      let mana = 100;
      return {
        cast: (spellName) => {
          if(mana && mana > 1) {
            mana -= 1;
          } else {
            console.log("Not enough mana to cast " + spellName);
          }
          console.log(`${name} cast ${spellName}`);
        },
        get mana() {
          return mana;
        }
      }
    },
    fighter: (name) => {
      let health = 100;
      let stamina = 100;
      return {
        fight: () => {
          if(stamina && stamina > 1) {
            stamina -= 1;
          } else {
            console.log("Not enough stamina to fight");
          }
          console.log(`${name} slashes at the foe!`);
        },
        get stamina() {
          return stamina;
        }
      }
    }
  }
}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);