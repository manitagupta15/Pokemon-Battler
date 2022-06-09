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
    this.storage = []; // storage can exceed the length of 1
  }
  throw(caughtPokemon) {
    if (caughtPokemon === undefined) {
      if (this.storage.length === 0) {
        console.log("Pokeball is empty");
      } else {
        const toBeReturned = this.storage.shift();
        console.log(`Go Pokemon ${toBeReturned.name}`);
        return toBeReturned;
      }
    } else if (this.storage.length < 1) {
      this.storage.push(caughtPokemon);
      console.log(`you caught Pokemon ${caughtPokemon.name}'s name`);
    }
  }
  isEmpty() {
    return this.storage.length === 0 ? true : false;
  }
  contains() {
    if (this.isEmpty()) {
      return "empty ...";
    }
    return this.storage[0];
  }
}

class Trainer extends Pokeballs {
  constructor() {
    super();
    this.belt = [];
  }

  catch(catchPokemon) {
    if (this.belt.length < 6) {
      const caughtPokemon = this.throw(catchPokemon); // returns the pokemon in this.storage Pokeball
      this.belt.push(catchPokemon); // push the returned Pokeball in the belt
    }
  }

  getPokemon(newPokemon) {
    if (this.belt.includes(newPokemon)) {
      //// do we need to remove the passed pokemon from the Belt????
      this.throw(newPokemon);
      return this.storage;
    }
  }
}

/*
## Trainer


- A Trainer should have a belt property (you decide an appropriate data type) that should have 6 Pokeballs

### Methods

- `catch`
  - takes a Pokemon as an argument
  - it should use one of its empty Pokeball's `throw` method to catch the Pokemon
  - should do something if you don't have any empty Pokeballs, what and how is up to you
- `getPokemon`
  - takes the name of a Pokemon
  - will search for the the Pokemon with that name in the belt
  - use the Pokeball's throw to return that specific Pokemon

*/
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
