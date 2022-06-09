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
  test("Pokeballs has storage property", () => {
    const testPokeball = new Pokeballs();
    testPokeball.storage = [1];
    expect(testPokeball.storage).toEqual([1]);
  });

  describe("Testing throw() function:", () => {
    test("If Pokeball is empty, it should capture the passed pokemon", () => {
      const testPokeball = new Pokeballs();
      const testPokemon = new Pokemon("battler");
      testPokeball.throw(testPokemon);

      expect(testPokeball.storage).toEqual([testPokemon]);
    });
    test("If Pokeball is not empty, it should not capture the passed pokemon", () => {
      const testPokeball = new Pokeballs();
      const testPokemon = new Pokemon("battler");
      testPokeball.throw(testPokemon);

      const testPokemon2 = new Pokemon("pokemon2");
      testPokeball.throw(testPokemon2);

      expect(testPokeball.storage).toEqual([testPokemon]);
    });
    test("If throw is called with no arguments and pokeball is not empty, it should return the stored pokemon", () => {
      const testPokeball = new Pokeballs();
      const testPokemon = new Pokemon("battler");
      testPokeball.throw(testPokemon);

      expect(testPokeball.throw()).toEqual(testPokemon);
    });
    test("If throw is called with no arguments and pokeball is empty, it shouldn't return anything and log a message to console", () => {
      const consoleSpy = jest.spyOn(console, "log");
      const testPokeball = new Pokeballs();

      testPokeball.throw();
      expect(consoleSpy.mock.calls).toEqual([["Pokeball is empty"]]);
    });
  });

  describe("Testing empty():", () => {
    test("empty is a method in Pokeball", () => {
      const testPokeball = new Pokeballs();

      expect(typeof testPokeball.isEmpty).toBe("function");
    });
    test("return true is pokeball is empty, else return false", () => {
      const testPokeball = new Pokeballs();
      testPokeball.storage = [1];

      expect(testPokeball.isEmpty()).toBe(false);
      testPokeball.storage = [];
      expect(testPokeball.isEmpty()).toBe(true);
    });
  });

  describe("Testing contains():",()=>{
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
      testPokeball.throw(testPokemon)

      expect(testPokeball.contains()).toEqual(testPokemon);
    });
  })
});
