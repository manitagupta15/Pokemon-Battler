class Pokemon {
  constructor(name, hitPoints = 0, attackDamage = 0) {
    this.name = name;
    this.type = "normal";
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = "tackle";
  }

  isEffectiveAgainst(newPokemon) {
    return this.type !== "normal" ? true : false;
  }

  isWeakTo(newPokemon) {
    return this.type !== "normal" ? true : false;
  }

  takeDamage(healthDamage) {
    this.hitPoints -= healthDamage;
  }

  useMove() {
    console.log(
      `Pokemon ${this.name} used Pokemon ${this.name}'s ${this.move}`
    );
    return this.attackDamage;
  }

  hasFainted() {
    return this.hitPoints <= 0 ? true : false;
  }
}

class Fire extends Pokemon {
  constructor(name, hitPoints = 0, attackDamage = 0) {
    super(name);
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.type = "fire";
  }
  isEffectiveAgainst(newPokemon) {
    // grass
    if (newPokemon.type === "grass") {
      return true;
    } else {
      return false;
    }
  }
  isWeakTo(newPokemon) {
    if (newPokemon.type === "water") {
      return true;
    } else {
      return false;
    }
  }
}
class Grass extends Pokemon {
  constructor(name, hitPoints = 0, attackDamage = 0) {
    super(name);
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.type = "grass";
  }
  isEffectiveAgainst(newPokemon) {
    if (newPokemon.type === "water") {
      return true;
    } else {
      return false;
    }
  }
  isWeakTo(newPokemon) {
    if (newPokemon.type === "fire") {
      return true;
    } else {
      return false;
    }
  }
}
class Water extends Pokemon {
  constructor(name, hitPoints = 0, attackDamage = 0) {
    super(name);
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.type = "water";
  }
  isEffectiveAgainst(newPokemon) {
    if (newPokemon.type === "fire") {
      return true;
    } else {
      return false;
    }
  }
  isWeakTo(newPokemon) {
    if (newPokemon.type === "grass") {
      return true;
    } else {
      return false;
    }
  }
}

class Charmander extends Fire {
  constructor(name, hitPoints = 0, attackDamage = 0) {
    super(name);
    this.hitPoints = this.hitPoints;
    this.attackDamage = this.attackDamage;
    this.move = "ember";
  }
}

class Squirtle extends Water {
  constructor(name, hitPoints = 0, attackDamage = 0) {
    super(name);
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = "water gun";
  }
}

class Bulbasaur extends Grass {
  constructor(name, hitPoints = 0, attackDamage = 0) {
    super(name);
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = "vine whip";
  }
}

class Rattata extends Pokemon {
  constructor(name, hitPoints = 0, attackDamage = 0) {
    super(name);
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
  }
}

class Pokeballs {
  constructor() {
    this.storage = null;
  }
  throw(newPok) {
    if (newPok === undefined) {
      if (this.storage === null) {
        console.log("No Pokemon in the ball");
      } else {
        const toBeReturned = this.storage;
        this.storage = null;
        console.log(`Go ${toBeReturned.name}!`);
        return toBeReturned;
      }
    } else {
      if (this.storage === null) {
        this.storage = newPok;
        console.log(`You caught ${newPok.name}`);
      } else {
        console.log("Cannot Catch! Already Occupied!");
      }
    }
  }
  isEmpty() {
    return this.storage === null ? true : false;
  }
  contains() {
    if (this.isEmpty()) {
      return "empty ...";
    }
    return this.storage;
  }
}
class Trainer {
  constructor() {
    this.belt = [];
  }
  catch(newPok) {
    if (this.belt.length < 6) this.belt.push(new Pokeballs());

    for (let i = 0; i < this.belt.length; i++) {
      this.belt[i].throw(newPok);
    }
    if (this.belt.length === 6) {
      console.log("Cannot catch! Belt is full!");
    }
  }
  getPokemon(nameOfPok) {
    for (let i = 0; i < this.belt.length; i++) {
      if (this.belt[i].storage.name === nameOfPok) {
        console.log("name of pokemon", nameOfPok);
        return this.belt[i].throw();
      }
    }
  }
}
// Battle
class Battle {
  constructor(trainer1, trainer2, pokemons1, pokemons2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.TrainerPokemon1 = pokemons1;
    this.TrainerPokemon2 = pokemons2;
    this.i = 0;
  }

  fight() {
    //attacker
    const pokemon1 = this.trainer1.getPokemon(this.TrainerPokemon1.name);
    //defender
    const pokemon2 = this.trainer2.getPokemon(this.TrainerPokemon2.name);

    let i = 0;
    let j = true;
    while (j) {
      console.log(this.i, " << turn");

      if (this.i % 2 === 0) {
        // deal the damage

        if (pokemon2.isEffectiveAgainst(pokemon1)) {
          pokemon2.takeDamage(0.75 * pokemon1.attackDamage);
          console.log(`Pokemon ${pokemon2.name} used ${pokemon2.move}`);
        } else if (pokemon2.isWeakTo(pokemon1)) {
          pokemon2.takeDamage(1.25 * pokemon1.attackDamage);
          console.log(`Pokemon ${pokemon2.name} used ${pokemon2.move}`);
        }

        // attack message
        //if the defending Pokemon faints (depletes all hit points), the attacker wins.​
        if (pokemon2.hasFainted()) {
          console.log(pokemon2.name + " has Fainted and lost!");
          j = false;
          //  return j;
        } // else return j;
      } else {
        if (pokemon1.isEffectiveAgainst(pokemon2)) {
          pokemon1.takeDamage(0.75 * pokemon2.attackDamage);
          console.log(`Pokemon ${pokemon1.name} used ${pokemon1.move}`);
        } else if (pokemon1.isWeakTo(pokemon2)) {
          pokemon1.takeDamage(1.25 * pokemon2.attackDamage);
          console.log(`Pokemon ${pokemon2.name} used ${pokemon2.move}`);
        }

        // attack message
        //if the defending Pokemon faints (depletes all hit points), the attacker wins.​
        if (pokemon1.hasFainted()) {
          console.log(pokemon1.name + " has lost!");
          j = false;
        }
      }
      this.i++;
    }
  }
  // The message will vary depending on the defender's weakness/strength.
}

module.exports = {
  Pokemon,
  Fire,
  Water,
  Grass,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
  Pokeballs,
  Trainer,
  Battle,
};
