var Fonctions = require("./fonctions");
var fonctions = new Fonctions();

describe("Maximum 4 nombres", function () {
  it("0, 1, 2, 3", function () {
    expect(Fonctions.maximum4nombres(0, 1, 2, 3)).toEqual(3);
  });

  it("0, 1, 4, 3", function () {
    expect(Fonctions.maximum4nombres(0, 1, 4, 3)).toEqual(4);
  });

  it("0, 5, 2, 3", function () {
    expect(Fonctions.maximum4nombres(0, 1, 2, 3)).toEqual(5);
  });

  it("7, 1, 2, 3", function () {
    expect(Fonctions.maximum4nombres(0, 1, 2, 3)).toEqual(7);
  });

  it("0, 1, 3, 3", function () {
    expect(Fonctions.maximum4nombres(0, 1, 2, 3)).toEqual(3);
  });

  it("1, 3, 3, 1", function () {
    expect(Fonctions.maximum4nombres(0, 1, 2, 3)).toEqual(3);
  });
});

xdescribe("Ecart de durées", function () {
  it("23:42:21 - 13:21:42", function () {
    expect(Fonctions.ecartDurees(23, 42, 21, 13, 21, 42)).toEqual(37239);
  });

  it("12:12:12 - 22:22:22", function () {
    expect(Fonctions.ecartDurees(12, 12, 12, 22, 22, 22)).toEqual(36610);
  });
});

xdescribe("Année bissextile", function () {
  it("2010", function () {
    expect(Fonctions.estBissextile(2010)).toBe(false);
  });

  it("2012", function () {
    expect(Fonctions.estBissextile(2012)).toBe(true);
  });

  it("2100", function () {
    expect(Fonctions.estBissextile(2100)).toBe(false);
  });

  it("2400", function () {
    expect(Fonctions.estBissextile(2400)).toBe(true);
  });

  it("1980", function () {
    expect(Fonctions.estBissextile(1980)).toBe(true);
  });

  it("1985", function () {
    expect(Fonctions.estBissextile(1985)).toBe(false);
  });
});

xdescribe("Nombre de jours dans un mois", function () {
  it("2, 2010", function () {
    expect(Fonctions.nombreJours(2, 2010)).toEqual(28);
  });

  it("2, 2012", function () {
    expect(Fonctions.nombreJours(2, 2012)).toEqual(29);
  });

  it("5, 2013", function () {
    expect(Fonctions.nombreJours(5, 2013)).toEqual(31);
  });

  it("6, 1985", function () {
    expect(Fonctions.nombreJours(6, 1985)).toEqual(30);
  });
});
