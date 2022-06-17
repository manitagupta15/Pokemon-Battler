const inquirer = require("inquirer");

/*
function intailiseTrainerPokemons(train1, train2) {
  train1PokemonChoices = [];
  train2PokemonChoices = [];

  for (let i = 0; i < train1.belt.length; i++) {
    if (train1.belt[i].storage !== null) {
      train1PokemonChoices.push(train1.belt[i].storage);
    }
  }

  for (let i = 0; i < train2.belt.length; i++) {
    if (train2.belt[i].storage !== null) {
      train2PokemonChoices.push(train2.belt[i].storage);
    }
  }

  inquire
    .prompt([
      {
        name: "pokemon",
        type: "list",
        message: "Choose your Pokemon",
        choices: train1PokemonChoices,
      },
    ])
    .then((trainer1pokemon) => {
      radomTrainer2Pokemon =
        train2PokemonChoices[
          Math.floor(Math.random() * train2PokemonChoices.length)
        ];
      beginBattle(
        player.getPokemon(trainer1pokemon.pokemon),
        radomTrainer2Pokemon
      );
    })
    .catch((err) => {
      console.log(err);
    });
}
*/
class Pokemon {
  constructor(name, hitPoints = 0, attackDamage = 0, type) {
    this.name = name;
    this.type = type ? type : "normal";
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = "tackle";
  }

  isEffectiveAgainst(newPokemon) {
    return newPokemon.type !== "normal" ? true : false;
  }

  isWeakTo(newPokemon) {
    return newPokemon.type !== "normal" ? true : false;
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
  constructor(name) {
    this.name = name;
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
    console.log(this.TrainerPokemon1, "<--pokemon1");
    console.log(this.TrainerPokemon2, "<--pokemon2");

    //attacker
    const pokemon1 = this.TrainerPokemon1; //this.trainer1.getPokemon(this.TrainerPokemon1.name);
    //defender
    const pokemon2 = this.TrainerPokemon2; // this.trainer2.getPokemon(this.TrainerPokemon2.name);

    let i = 0;
    let j = true;
    while (j) {
      console.log(this.i, " << turn");

      if (this.i % 2 === 0) {
        // deal the damage

        if (pokemon2.isEffectiveAgainst(pokemon1)) {
          pokemon2.takeDamage(0.75 * pokemon1.attackDamage);
          console.log(
            `Pokemon ${pokemon2.name} is effective against ${pokemon1.name} and uses move ${pokemon2.move}`
          );
        } else if (pokemon2.isWeakTo(pokemon1)) {
          pokemon2.takeDamage(1.25 * pokemon1.attackDamage);
          console.log(
            `Pokemon ${pokemon2.name} is weak against ${pokemon1.name} and used move ${pokemon2.move}`
          );
        } else {
          pokemon2.takeDamage(pokemon1.attackDamage);
          console.log(
            `Pokemon ${pokemon2.name} is neither efffective nor weak against ${pokemon1.name} and used move ${pokemon2.move}`
          );
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
          console.log(
            `Pokemon ${pokemon1.name} is effective against ${pokemon2.name} and uses move ${pokemon1.move}`
          );
        } else if (pokemon1.isWeakTo(pokemon2)) {
          pokemon1.takeDamage(1.25 * pokemon2.attackDamage);
          console.log(
            `Pokemon ${pokemon1.name} is weak against ${pokemon2.name} and used move ${pokemon1.move}`
          );
        } else {
          pokemon1.takeDamage(pokemon2.attackDamage);
          console.log(
            `Pokemon ${pokemon1.name} is neither efffective nor weak against ${pokemon2.name} and used move ${pokemon1.move}`
          );
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

const bulbasaur1 = new Pokemon("bulbasaur", 30, 6, "grass");
const bulbasaur2 = new Pokemon("bulbasaur", 30, 6, "grass");
const charmander1 = new Pokemon("charmander", 24, 8, "fire");
const charmander2 = new Pokemon("charmander", 24, 8, "fire");
const squirtle1 = new Pokemon("squirtle", 28, 7, "water");
const squirtle2 = new Pokemon("squirtle", 28, 7, "water");
const eevee1 = new Pokemon("eevee", 30, 6, "normal");
const eevee2 = new Pokemon("eevee", 30, 6, "normal");

let trainers = ["Ash", "Maxie", "Bea"];
let pokemon = {
  bulbasaur1,
  bulbasaur2,
  charmander1,
  charmander2,
  squirtle1,
  squirtle2,
  eevee1,
  eevee2,
};
let pokemonStrings = ["bulbasaur", "charmander", "squirtle", "eevee"];

const questions = [
  {
    type: "list",
    name: "trainer1",
    message: "player 1 choose your trainer",
    choices: trainers,
  },
  {
    type: "list",
    name: "trainer2",
    message: "player 2 choose your trainer",
    choices: trainers,
  },
  {
    type: "list",
    name: "pokemon1",
    message: "player 1 choose your pokemon",
    choices: pokemonStrings,
  },
  {
    type: "list",
    name: "pokemon2",
    message: "player 2 choose your pokemon",
    choices: pokemonStrings,
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    const pokemon1 = answers.pokemon1;
    const pokemon2 = answers.pokemon2;
    const trainer1 = answers.trainer1;
    const trainer2 = answers.trainer2;

    const pokemon1Class = pokemon[`${pokemon1}1`];
    const pokemon2Class = pokemon[`${pokemon2}2`];

    const myBattle = new Battle(
      trainer1,
      trainer2,
      pokemon1Class,
      pokemon2Class
    );

    myBattle.fight();
  })
  .catch((err) => {
    console.log(err);
  });

/*
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
};*/
