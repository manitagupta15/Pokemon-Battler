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
    return this.hitPoints === 0 ? true : false;
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
    for (let i = 0; i < 6; i++) {
      this.belt.push(new Pokeballs());
    }
  }
  catch(newPok) {
    let catched = false;
    for (let i = 0; i < 6; i++) {
      if (this.belt[i].isEmpty()) {
        this.belt[i].throw(newPok);
        catched = true;
        break;
      }
    }
    if (!catched) {
      console.log("Cannot catch! Belt is full!");
    }
  }
  getPokemon(nameOfPok) {
    for (let i = 0; i < 6; i++) {
      if (
        this.belt[i].storage !== null &&
        this.belt[i].storage.name === nameOfPok
      ) {
        const toBeReturned = this.belt[i].throw();
        if (!undefined) {
          return toBeReturned;
        }
      }
    }
  }
}

// Battle
class Battle {
  constructor(trainer1, trainer2, pokemons1, pokemons2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.pokemons1 = pokemons1;
    this.pokemons2 = pokemons2;

    const newPok1 = new Pokemon("Charmander", "fire", 44, 17, "flamethrower");

    const newPok2 = new Pokemon("Vaporeon", "water", 70, 19, "hydro pump");
  }
  fight(newPok) {
    newPok2.takeDamage(newPok1.useMove());
  }
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
};
