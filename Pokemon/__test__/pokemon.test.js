const {
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
} = require("../pokemon.js");

describe("Pokemon", () => {
  test("check if Pokemon class has a name property", () => {
    const testPokemon = new Pokemon("Battler");
    expect(testPokemon.name).toBe("Battler");
  });

  test("check if Pokemon class has a type property", () => {
    const testPokemon = new Pokemon("Battler");
    expect(testPokemon.type).toBe("normal");
  });

  test("check if Pokemon class has a hitPoints property", () => {
    const testPokemon = new Pokemon("Battler");
    expect(testPokemon.hitPoints).toBe(0);
  });

  test("check if Pokemon class has a attackDamage property", () => {
    const testPokemon = new Pokemon("Battler");
    expect(testPokemon.attackDamage).toBe(0);
  });

  test("check if Pokemon class has a move property", () => {
    const testPokemon = new Pokemon("Battler");
    expect(testPokemon.move).toBe("tackle");
  });

  test("check if Pokemon class has a isEffectiveAgainst() method", () => {
    const testPokemon = new Pokemon("Battler");
    expect(typeof testPokemon.isEffectiveAgainst).toBe("function");
  });

  test("isEffectiveAgainst() method returns Boolean ", () => {
    const testPokemon1 = new Pokemon("Battler");
    const testPokemon2 = new Pokemon("Bettle");
    testPokemon2.type = "Not Normal";
    expect(testPokemon1.isEffectiveAgainst(testPokemon2)).toBe(true);

    testPokemon2.type = "normal";
    expect(testPokemon1.isEffectiveAgainst(testPokemon2)).toBe(false);
  });

  test("check if Pokemon class has a isWeakTo() method", () => {
    const testPokemon = new Pokemon("Battler");
    expect(typeof testPokemon.isWeakTo).toBe("function");
  });

  test("isWeakTo() method returns Boolean ", () => {
    const testPokemon1 = new Pokemon("Battler");
    const testPokemon2 = new Pokemon("Beetle");
    testPokemon2.type = "Not Normal";
    expect(testPokemon1.isWeakTo(testPokemon2)).toBe(true);

    testPokemon2.type = "normal";
    expect(testPokemon1.isWeakTo(testPokemon2)).toBe(false);
  });

  test("check if Pokemon class has a takeDamage() method", () => {
    const testPokemon = new Pokemon("Battler");
    expect(typeof testPokemon.takeDamage).toBe("function");
  });

  test("takeDamage() method returns updates the hit Points ", () => {
    const testPokemon = new Pokemon("Battler");
    testPokemon.takeDamage(5);
    expect(testPokemon.hitPoints).toBe(-5);

    testPokemon.takeDamage(2);

    expect(testPokemon.hitPoints).toBe(-7);
  });

  test("check if Pokemon class has a useMove() method", () => {
    const testPokemon = new Pokemon("Battler");
    expect(typeof testPokemon.useMove).toBe("function");
  });

  test("useMove() method returns the Pokemon's attackDamage", () => {
    const testPokemon = new Pokemon("Battler");
    expect(testPokemon.useMove()).toBe(testPokemon.attackDamage);
  });

  test("check if Pokemon class has a hasFainted() method", () => {
    const testPokemon = new Pokemon("Battler");
    expect(typeof testPokemon.hasFainted).toBe("function");
  });

  test("hasFainted() method returns boolean", () => {
    const testPokemon = new Pokemon("Battler");

    testPokemon.hitPoints = 9;
    expect(testPokemon.hasFainted()).toBe(false);

    testPokemon.hitPoints = 0;
    expect(testPokemon.hasFainted()).toBe(true);

    testPokemon.hitPoints = 4;
    expect(testPokemon.hasFainted()).toBe(false);
  });
});

describe("Fire Class:", () => {
  test("Fire Pokemon has a type property set to fire", () => {
    const testFire = new Fire("Battler");
    expect(testFire.name).toBe("Battler");
    expect(testFire.type).toBe("fire");
  });

  test("Fire Pokemon is effective against pokemon of type grass", () => {
    const testFire = new Fire("Battler");
    const testGrass = new Grass("PokeGrass");
    testGrass.type = "grass";

    expect(testFire.isEffectiveAgainst(testGrass)).toBe(true);

    const testWater = new Water("water");
    expect(testFire.isEffectiveAgainst(testWater)).toBe(false);
  });

  test("Fire Pokemon is weak against pokemon of type water", () => {
    const testFire = new Fire("Battler");
    const testWater = new Pokemon("water");
    testWater.type = "water";

    expect(testFire.isWeakTo(testWater)).toBe(true);

    testWater.type = "grass";
    expect(testFire.isWeakTo(testWater)).toBe(false);
  });
});
describe("Grass Class:", () => {
  test("Grass Pokemon has a type property set to grass", () => {
    const testGrass = new Grass("Battler");
    expect(testGrass.name).toBe("Battler");
    expect(testGrass.type).toBe("grass");
  });

  test("Grass Pokemon is effective against pokemon of type water", () => {
    const testGrass = new Grass("Battler");
    const testWater = new Water("grass");
    expect(testGrass.isEffectiveAgainst(testWater)).toBe(true);

    const testFire = new Fire("battler");
    expect(testGrass.isEffectiveAgainst(testFire)).toBe(false);
  });

  test("Grass Pokemon is weak against pokemon of type fire", () => {
    const testGrass = new Grass("battler");
    const testFire = new Fire("firecl");

    expect(testGrass.isWeakTo(testFire)).toBe(true);

    const testWater = new Water("newwater");
    expect(testGrass.isWeakTo(testWater)).toBe(false);
  });
});

describe("Water Class:", () => {
  test("Water Pokemon has a type property set to water", () => {
    const testWater = new Water("Battler");
    expect(testWater.name).toBe("Battler");
    expect(testWater.type).toBe("water");
  });

  test("Water Pokemon is effective against pokemon of type Fire", () => {
    const testWater = new Water("Battler");
    const testFire = new Fire("grass");
    expect(testWater.isEffectiveAgainst(testFire)).toBe(true);

    testFire.type = "grass";
    expect(testWater.isEffectiveAgainst(testFire)).toBe(false);
  });

  test("Water Pokemon is weak against pokemon of type grass", () => {
    const testWater = new Water("Battler");
    const testGrass = new Pokemon("water");
    testGrass.type = "grass";

    expect(testWater.isWeakTo(testGrass)).toBe(true);

    testGrass.type = "fire";
    expect(testWater.isWeakTo(testGrass)).toBe(false);
  });
});

describe("Charmander Class:", () => {
  test("Charmander Pokemon has a move property set to ember", () => {
    const testCharmander = new Charmander("Battler");
    expect(testCharmander.name).toBe("Battler");
    expect(testCharmander.move).toBe("ember");
  });
});

describe("Squirtle Class:", () => {
  test("Squirtle Pokemon has a move property set to water gun", () => {
    const testSquirtle = new Squirtle("Battler");
    expect(testSquirtle.name).toBe("Battler");
    expect(testSquirtle.move).toBe("water gun");
  });
});

describe("Bulbasaur Class:", () => {
  test("Bulbasaur Pokemon has a move property set to vine whip", () => {
    const testBulbasaur = new Bulbasaur("Battler");
    expect(testBulbasaur.name).toBe("Battler");
    expect(testBulbasaur.move).toBe("vine whip");
  });
});

describe("Rattata Class:", () => {
  test("Rattata Pokemon has same properties as Pokemon class", () => {
    const testRattata = new Rattata("Battler");
    const testPokemon = new Pokemon("Battler");
    expect(testRattata.type).toBe(testPokemon.type);
    expect(testRattata.move).toBe(testPokemon.move);
  });
});
describe("Pokeballs Class:", () => {
  test("Pokeballs has a pokemon property", () => {
    const testPokeball = new Pokeballs();
    testPokeball.storage = 1;
    expect(testPokeball.storage).toBe(1);
  });

  describe("Testing throw() function:", () => {
    test("If Pokeball is empty, it should capture the passed pokemon", () => {
      const testPokeball = new Pokeballs();
      const testPokemon = new Pokemon("battler");
      testPokeball.throw(testPokemon);

      expect(testPokeball.storage).toEqual(testPokemon);
    });
    test("If Pokeball is not empty, it should not capture the passed pokemon", () => {
      const testPokeball = new Pokeballs();
      const testPokemon = new Pokemon("battler");
      testPokeball.throw(testPokemon);

      const testPokemon2 = new Pokemon("pokemon2");
      testPokeball.throw(testPokemon2);

      expect(testPokeball.storage).toEqual(testPokemon);
      expect(testPokeball.storage).not.toEqual(testPokemon2);
    });
    test("If throw is called with no arguments and pokeball is not empty, it should return the stored pokemon", () => {
      const testPokeball = new Pokeballs();
      const testPokemon = new Pokemon("battler");
      testPokeball.throw(testPokemon);

      expect(testPokeball.storage).toEqual(testPokemon);
      expect(testPokeball.throw()).toEqual(testPokemon);
    });
    test("If throw is called with no arguments and pokeball is empty, it shouldn't return anything and log a message to console", () => {
      const consoleSpy = jest.spyOn(console, "log");
      const testPokeball = new Pokeballs();

      testPokeball.throw();
      expect(consoleSpy.mock.calls).toEqual([["No Pokemon in the ball"]]);
    });
  });

  describe("Testing empty():", () => {
    test("empty is a method in Pokeball", () => {
      const testPokeball = new Pokeballs();

      expect(typeof testPokeball.isEmpty).toBe("function");
    });
    test("return true is pokeball is empty, else return false", () => {
      const testPokeball = new Pokeballs();
      // add pokemon to pokeball
      testPokeball.throw(new Pokemon("balbausar"));
      expect(testPokeball.isEmpty()).toBe(false);
      // remove pokemon from pokeball
      testPokeball.throw();
      expect(testPokeball.isEmpty()).toBe(true);
    });
  });

  describe("Testing contains():", () => {
    test("contains is a method in Pokeball", () => {
      const testPokeball = new Pokeballs();

      expect(typeof testPokeball.contains).toBe("function");
    });
    test("if Pokeball is empty, return 'empty ...' ", () => {
      const testPokeball = new Pokeballs();

      expect(testPokeball.contains()).toBe("empty ...");
    });
    test("if Pokeball is not empty, return the pokemon", () => {
      const testPokeball = new Pokeballs();
      const testPokemon = new Pokemon("battler");
      testPokeball.throw(testPokemon);
      expect(testPokeball.contains()).toEqual(testPokemon);
    });
  });
});

describe("Trainer Class: ", () => {
  test("trainer class has a property named belt", () => {
    const testTrainer = new Trainer();
    testTrainer.belt = [];
    expect(testTrainer.belt).toEqual([]);
  });

  test("trainer class has a method Catch() ", () => {
    const testTrainer = new Trainer();
    expect(typeof testTrainer.catch).toBe("function");
  });

  test("trainer class has a method Catch() which takes a pokemon as an argument and stores it in its pokeball, then stores that pokeball in its belt provided belts length is less than 7 ", () => {
    const testTrainer = new Trainer();

    // pokemons
    const testPokemon1 = new Pokemon("pok1");
    const testPokemon2 = new Pokemon("pok2");
    const testFire1 = new Fire("fire1");
    const testFire2 = new Fire("fire2");
    const testWater1 = new Water("water1");
    const testWater2 = new Water("water2");
    const testGrass1 = new Grass("grass1");
    const testGrass2 = new Grass("grass2");

    // pokeballs
    const testPokeball1 = new Pokeballs();
    const testPokeball2 = new Pokeballs();
    const testPokeball3 = new Pokeballs();
    const testPokeball4 = new Pokeballs();
    const testPokeball5 = new Pokeballs();
    const testPokeball6 = new Pokeballs();
    const testPokeball7 = new Pokeballs();
    const testPokeball8 = new Pokeballs();

    // catch pokemons in pokeballs
    testPokeball1.throw(testPokemon1);
    testPokeball2.throw(testPokemon2);
    testPokeball3.throw(testFire1);
    testPokeball4.throw(testFire2);
    testPokeball5.throw(testWater1);
    testPokeball6.throw(testWater2);
    testPokeball7.throw(testGrass1);
    testPokeball8.throw(testGrass2);

    testTrainer.catch(testPokemon1);
    testTrainer.catch(testPokemon2);
    testTrainer.catch(testFire1);
    testTrainer.catch(testFire2);
    testTrainer.catch(testWater1);
    testTrainer.catch(testWater2);
    testTrainer.catch(testGrass1);
    testTrainer.catch(testGrass2);

    const allPokeballs = [
      testPokeball1,
      testPokeball2,
      testPokeball3,
      testPokeball4,
      testPokeball5,
      testPokeball6,
      testPokeball7,
      testPokeball8,
    ];

    const belt = allPokeballs.slice(0, 6);
    expect(testTrainer.belt).not.toEqual(allPokeballs);
    expect(testTrainer.belt).toEqual(belt);
  });

  test("trainer class has a method getPokemon() ", () => {
    const testTrainer = new Trainer();
    expect(typeof testTrainer.getPokemon).toBe("function");
  });

  test("test the catch() method, it catches a pokemon and stores in the belt, belt size can be more than 6", () => {
    const testTrainer = new Trainer();

    const testWater = new Water("water");
    const testFire = new Fire("fire");
    const testPokemon = new Pokemon("pok");

    testTrainer.catch(testWater);
    testTrainer.catch(testFire);
    testTrainer.catch(testPokemon);

    const Pk1 = new Pokeballs();
    Pk1.throw(testWater);

    const Pk2 = new Pokeballs();
    Pk2.throw(testFire);
    const Pk3 = new Pokeballs();
    Pk3.throw(testPokemon);

    expect(testTrainer.belt).toEqual([Pk1, Pk2, Pk3]);
  });

  test("trainer class has a method getPokemon() that take a Pokemon as an argument, passed that Pokemon in throw() method if passed Pokemon is Present in the Belt ", () => {
    const testTrainer = new Trainer();
    const testWater = new Water("water");
    testTrainer.catch(testWater);

    expect(testTrainer.getPokemon("water")).toEqual(testWater);
  });
});

describe("Battle Class: ", () => {
  describe("Testing properties:", () => {
    test("Battle has a trainer1 property", () => {
      const testBattle = new Battle(
        new Trainer(),
        new Trainer(),
        new Pokemon(),
        new Pokemon()
      );
      expect(typeof testBattle.trainer1).toBe("object");
    });
    test("Battle has a trainer2 property", () => {
      const testBattle = new Battle(
        new Trainer(),
        new Trainer(),
        new Pokemon(),
        new Pokemon()
      );
      expect(typeof testBattle.trainer2).toBe("object");
    });
    test("Battle has a pokemon1 property", () => {
      const testBattle = new Battle(
        new Trainer(),
        new Trainer(),
        new Pokemon(),
        new Pokemon()
      );
      expect(typeof testBattle.pokemon1).toBe("object");
    });
    test("Battle has a pokemon2 property", () => {
      const testBattle = new Battle(
        new Trainer(),
        new Trainer(),
        new Pokemon(),
        new Pokemon()
      );
      expect(typeof testBattle.pokemon2).toBe("object");
    });
  });

  describe("Testing Fight():", () => {
    test("Fight is a function: ", () => {
      const testBattle = new Battle();
      expect(typeof testBattle.fight).toBe("function");
    });
    test("takes a pokemon and deducts its damage points from the hitpoints of defending pokemon ", () => {
      const testPok1 = new Pokemon();
      testPok1.attackDamage = 5;
      testPok1.hitPoints = 30;

      const testPok2 = new Pokemon();
      testPok2.attackDamage = 10;
      testPok2.hitPoints = 20;

      const testBattle = new Battle(
        new Trainer(),
        new Trainer(),
        testPok1,
        testPok2
      );
      testBattle.fight(1);
      expect(testPok2.hitPoints).toBe(20);
    });
    test("if defender is strong against attacker, multiply damage by 0.75, else multiply damage by 1.25", () => {
      const testPok1 = new Fire();
      testPok1.attackDamage = 5;
      testPok1.hitPoints = 30;

      const testPok2 = new Grass();
      testPok2.attackDamage = 10;
      testPok2.hitPoints = 20;

      const testBattle = new Battle(
        new Trainer(),
        new Trainer(),
        testPok1,
        testPok2
      );
      testBattle.fight(0);
      expect(testPok2.hitPoints).toBe(13.75);
    });
  });
});

describe("initiate()", () => {
  test("should initiate and keep them fighting until one of them faints", () => {
    const testPok1 = new Fire("fiery battler");
    testPok1.attackDamage = 10;
    testPok1.hitPoints = 30;

    const testPok2 = new Grass("grassy battler");
    testPok2.attackDamage = 3;
    testPok2.hitPoints = 10;

    const testBattle = new Battle(
      new Trainer(),
      new Trainer(),
      testPok1,
      testPok2
    );

    testBattle.initiate();
    console.log(testPok1);
  });
});
