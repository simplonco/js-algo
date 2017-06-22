var Boucles = require("./boucles");
var boucles = new Boucles();

xdescribe("factorielle(n)", function () {
  it("0", function () {
    expect(Boucles.factorielle(0)).toBe(1);
  });

  it("1", function () {
    expect(Boucles.factorielle(1)).toBe(1);
  });

  it("2", function () {
    expect(Boucles.factorielle(2)).toBe(2);
  });

  it("4", function () {
    expect(Boucles.factorielle(4)).toBe(24);
  });
});

xdescribe("nombrePremier(nombre)", function () {
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

xdescribe("multiplier(nombre1, nombre2)", function () {
  it("3 * 4", function () {
    expect(Boucles.multiplier(3, 4)).toBe(12);
  });

  it("0 * 2", function () {
    expect(Boucles.multiplier(0, 2)).toBe(0);
  });

  it("5 * 0", function () {
    expect(Boucles.multiplier(5, 0)).toBe(0);
  });

  it("-1 * 2", function () {
    expect(Boucles.multiplier(-1, 2)).toBe(-2);
  });

  it("3 * -3", function () {
    expect(Boucles.multiplier(3, -3)).toBe(-9);
  });

  it("-4 * -5", function () {
    expect(Boucles.multiplier(-4, -5)).toBe(20);
  });
});

xdescribe("miroir(nombre)", function () {
  it("4209", function () {
    expect(Boucles.miroir(4209)).toBe(9024);
  });

  it("333", function () {
    expect(Boucles.miroir(333)).toBe(333);
  });

  it("1234567", function () {
    expect(Boucles.miroir(1234567)).toBe(7654321);
  });

  it("0", function () {
    expect(Boucles.miroir(0)).toBe(0);
  });
});
