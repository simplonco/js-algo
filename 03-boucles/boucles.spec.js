var Boucles = require("./boucles");
var boucles = new Boucles();

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

xdescribe("Nombre premier", function () {
  it("1", function () {
    expect(Boucles.nombrePremier(1)).toBe(true);
  });

  it("4", function () {
    expect(Boucles.nombrePremier(4)).toBe(false);
  });

  it("13", function () {
    expect(Boucles.nombrePremier(13)).toBe(true);
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
