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
    this.storage = [];
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

/*
contains
should return the name of the Pokemon that is stored,
if the Pokeball is empty is should return "empty ..."​

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
};
