class Pokemon {
  constructor(name) {
    this.name = name;
    this.type = "normal";
    this.hitPoints = 0;
    this.attackDamage = 0;
    this.move = "tackle";
  }

  isEffectiveAgainst(newPokemon) {
    return "normal" !== newPokemon.type ? true : false;
  }

  isWeakTo(newPokemon) {
    return "normal" !== newPokemon.type ? true : false;
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
  constructor(name) {
    super(name);
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
  constructor(name) {
    super(name);
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
  constructor(name) {
    super(name);
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
  constructor(name) {
    super(name);
    this.move = "ember";
  }
}

class Squirtle extends Water {
  constructor(name) {
    super(name);
    this.move = "water gun";
  }
}

class Bulbasaur extends Grass {
  constructor(name) {
    super(name);
    this.move = "vine whip";
  }
}

class Rattata extends Pokemon {
  constructor(name) {
    super(name);
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
        return this.belt[i].throw();
      }
    }
  }
}
// Battle
class Battle {
  constructor(trainer1, trainer2, pokemon1, pokemon2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }

  initiate() {
    let i = 0;
    while (this.fight(i)) {
      i++;
    }
    console.log("Fight's over");
  }

  fight(turn) {
    console.log(turn, " << turn");
    if (turn % 2 === 0) {
      // deal the damage
      let damage = this.pokemon1.attackDamage;
      if (this.pokemon2.isEffectiveAgainst(this.pokemon1)) {
        damage *= 0.75;
      }
      if (this.pokemon2.isWeakTo(this.pokemon1)) {
        damage *= 1.25;
      }
      this.pokemon2.takeDamage(damage);

      // attack message
      //if the defending Pokemon faints (depletes all hit points), the attacker wins.​
      if (this.pokemon2.hasFainted()) {
        console.log(this.pokemon2.name + " has lost!");
        return false;
      }
    } else {
      let damage = this.pokemon2.attackDamage;
      if (this.pokemon1.isEffectiveAgainst(this.pokemon2)) {
        damage *= 0.75;
      }
      if (this.pokemon1.isWeakTo(this.pokemon2)) {
        damage *= 1.25;
      }
      this.pokemon1.takeDamage(damage);

      // attack message
      //if the defending Pokemon faints (depletes all hit points), the attacker wins.​
      if (this.pokemon1.hasFainted()) {
        console.log(this.pokemon1.name + " has lost!");
        return false;
      }
    }
    return true;
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
