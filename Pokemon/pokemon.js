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

module.exports = {
  Pokemon,
  Fire,
  Water,
  Grass,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
};
