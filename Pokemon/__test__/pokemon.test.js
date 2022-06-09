const { Pokemon } = require("../pokemon.js");

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
