var Tableaux = require("./tableaux");
var tableaux = new Tableaux();

describe("Inverser les signes", function () {
  it("[0, 1, 2, 3, 4]", function () {
    expect(Tableaux.inverserSigne([0, 1, 2, 3, 4])).toEqual([0, 1, 2, 3, 4]);
  });

  it("[-4, -3, -2, -1]", function () {
    expect(Tableaux.inverserSigne([-4, -3, -2, -1])).toEqual([4, 3, 2, 1]);
  });

  it("[0, -1, 2, -3, 4]", function () {
    expect(Tableaux.inverserSigne([0, -1, 2, -3, 4])).toEqual([0, 1, 2, 3, 4]);
  });
});

xdescribe("Somme", function () {
  it("[1, 2, 3]", function () {
    expect(Tableaux.somme([1, 2, 3])).toEqual(6);
  });

  it("[7]", function () {
    expect(Tableaux.somme([7])).toEqual(7);
  });
});

xdescribe("Compter les éléments négatifs", function () {
  it("[1, 2, 3]", function () {
    expect(Tableaux.compterNegatifs([1, 2, 3])).toEqual(0);
  });

  it("[-1, -2, -3]", function () {
    expect(Tableaux.compterNegatifs([-1, -2, -3])).toEqual(3);
  });

  it("[0, -1, 2]", function () {
    expect(Tableaux.compterNegatifs([0, -1, 2])).toEqual(1);
  });
});

xdescribe("De 1 à n", function () {
  it("n = 5", function () {
    expect(Tableaux.nNombres(5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("n = 1", function () {
    expect(Tableaux.nNombres(1)).toEqual([1]);
  });
});

xdescribe("De 1 à n, décroissant", function () {
  it("n = 5", function () {
    expect(Tableaux.nNombresDecroissant(5)).toEqual([5, 4, 3, 2, 1]);
  });
});

xdescribe("De 1 à n, impairs", function () {
  it("n = 10", function () {
    expect(Tableaux.nNombresImpairs(10)).toEqual([1, 3, 5, 7, 9]);
  });
});

xdescribe("De 1 à n, multiples de 5", function () {
  it("n = 2", function () {
    expect(Tableaux.nNombresMultiplesDe5(2)).toEqual([]);
  });

  it("n = 23", function () {
    expect(Tableaux.nNombresMultiplesDe5(23)).toEqual([5, 10, 15, 20]);
  });
});

xdescribe("De 1 à 100, multiples de N", function () {
  it("n = 11", function () {
    expect(Tableaux.nombresMultiplesDeN(11)).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99]);
  });
});

xdescribe("Unique", function () {
  it("[0, 1, 2, 3, 4]", function () {
    expect(Tableaux.unique([0, 1, 2, 3, 4])).toBe(true);
  });

  it("[1, 1, 2, 3, 5, 8]", function () {
    expect(Tableaux.unique([0, 1, 2, 3, 4])).toBe(false);
  });
});

xdescribe("Inverser le tableau", function () {
  it("[1, 2, 3, 4, 5]", function () {
    expect(Tableaux.inverser([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  it("[-1, 2, -3, 4, -5]", function () {
    expect(Tableaux.inverser([-1, 2, -3, 4, -5])).toEqual([-5, 4, -3, 2, -1]);
  });

  it("[1]", function () {
    expect(Tableaux.inverser([1])).toEqual([1]);
  });
});

xdescribe("Maximum", function () {
  it("[1, 2, 3, 4]", function () {
    expect(Tableaux.max([1, 2, 3, 4])).toEqual(4);
  });

  it("[4, 1, 2, 3]", function () {
    expect(Tableaux.max([4, 1, 2, 3])).toEqual(4);
  });

  it("[1, 2, 4, 3]", function () {
    expect(Tableaux.max([1, 2, 4, 3])).toEqual(4);
  });

  it("[5]", function () {
    expect(Tableaux.max([5])).toEqual(5);
  });
});

xdescribe("Minimum", function () {
  it("[1, 2, 3, 4]", function () {
    expect(Tableaux.min([1, 2, 3, 4])).toEqual(1);
  });

  it("[4, 1, 2, 3]", function () {
    expect(Tableaux.min([4, 1, 2, 3])).toEqual(1);
  });

  it("[2, 4, 3, 1]", function () {
    expect(Tableaux.min([2, 4, 3, 1])).toEqual(1);
  });

  it("[5]", function () {
    expect(Tableaux.min([5])).toEqual(5);
  });
});

xdescribe("Position du maximum", function () {
  it("[1, 2, 3, 4]", function () {
    expect(Tableaux.positionMax([1, 2, 3, 4])).toEqual(3);
  });

  it("[4, 1, 2, 3]", function () {
    expect(Tableaux.positionMax([4, 1, 2, 3])).toEqual(0);
  });

  it("[1, 2, 4, 3]", function () {
    expect(Tableaux.positionMax([1, 2, 4, 3])).toEqual(2);
  });

  it("[5]", function () {
    expect(Tableaux.positionMax([5])).toEqual(0);
  });
});

xdescribe("Position du minimum", function () {
  it("[1, 2, 3, 4]", function () {
    expect(Tableaux.positionMin([1, 2, 3, 4])).toEqual(0);
  });

  it("[4, 1, 2, 3]", function () {
    expect(Tableaux.positionMin([4, 1, 2, 3])).toEqual(1);
  });

  it("[2, 4, 3, 1]", function () {
    expect(Tableaux.positionMin([2, 4, 3, 1])).toEqual(3);
  });

  it("[5]", function () {
    expect(Tableaux.positionMin([5])).toEqual(0);
  });
});

xdescribe("Ordre croissant", function () {
  it("[1, 2, 3, 4]", function () {
    expect(Tableaux.ordreCroissant([1, 2, 3, 4])).toBe(true);
  });

  it("[1, 5, 9, 42]", function () {
    expect(Tableaux.ordreCroissant([1, 5, 9, 42])).toBe(true);
  });

  it("[3, 8, 4, 5]", function () {
    expect(Tableaux.ordreCroissant([3, 8, 4, 5])).toBe(false);
  });
});
