var Boucles = require("./boucles");
var boucles = new Boucles();

describe("De 1 à n", function () {
  it("n = 5", function () {
    expect(Boucles.nNombres(5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("n = 1", function () {
    expect(Boucles.nNombres(1)).toEqual([1]);
  });
});

xdescribe("De 1 à n, décroissant", function () {
  it("n = 5", function () {
    expect(Boucles.nNombresDecroissant(5)).toEqual([5, 4, 3, 2, 1]);
  });
});

xdescribe("De 1 à n, impairs", function () {
  it("n = 10", function () {
    expect(Boucles.nNombresImpairs(10)).toEqual([1, 3, 5, 7, 9]);
  });
});

xdescribe("De 1 à n, multiples de 5", function () {
  it("n = 2", function () {
    expect(Boucles.nNombresMultiplesDe5(2)).toEqual([]);
  });

  it("n = 23", function () {
    expect(Boucles.nNombresMultiplesDe5(23)).toEqual([5, 10, 15, 20]);
  });
});

xdescribe("De 1 à 100, multiples de N", function () {
  it("n = 11", function () {
    expect(Boucles.nombresMultiplesDeN(11)).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99]);
  });
});

xdescribe("Factorielle", function () {
  it("0", function () {
    expect(Boucles.factorielle(0)).toEqual(1);
  });

  it("1", function () {
    expect(Boucles.factorielle(1)).toEqual(1);
  });

  it("2", function () {
    expect(Boucles.factorielle(2)).toEqual(2);
  });

  it("4", function () {
    expect(Boucles.factorielle(4)).toEqual(24);
  });
});

xdescribe("Somme", function () {
  it("[1, 2, 3]", function () {
    expect(Boucles.somme([1, 2, 3])).toEqual(6);
  });

  it("[7]", function () {
    expect(Boucles.somme([7])).toEqual(7);
  });
});

xdescribe("Nombre premier", function () {
  it("1", function () {
    expect(Boucles.nombrePremier(1)).toEqual(true);
  });

  it("4", function () {
    expect(Boucles.nombrePremier(4)).toEqual(false);
  });

  it("13", function () {
    expect(Boucles.nombrePremier(13)).toEqual(true);
  });
});

xdescribe("Multiplier", function () {
  it("3 * 4", function () {
    expect(Boucles.multiplier(3, 4)).toEqual(12);
  });

  it("0 * 2", function () {
    expect(Boucles.multiplier(0, 2)).toEqual(0);
  });

  it("5 * 0", function () {
    expect(Boucles.multiplier(5, 0)).toEqual(0);
  });

  it("-1 * 2", function () {
    expect(Boucles.multiplier(-1, 2)).toEqual(-2);
  });

  it("3 * -3", function () {
    expect(Boucles.multiplier(3, -3)).toEqual(-9);
  });

  it("-4 * -5", function () {
    expect(Boucles.multiplier(-4, -5)).toEqual(20);
  });
});

xdescribe("Nombre miroir", function () {
  it("4209", function () {
    expect(Boucles.miroir(4209)).toEqual(9024);
  });

  it("333", function () {
    expect(Boucles.miroir(333)).toEqual(333);
  });

  it("1234567", function () {
    expect(Boucles.miroir(1234567)).toEqual(7654321);
  });

  it("0", function () {
    expect(Boucles.miroir(0)).toEqual(0);
  });
});
