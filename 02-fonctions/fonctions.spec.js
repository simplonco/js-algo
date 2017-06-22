var Fonctions = require("./fonctions");
var fonctions = new Fonctions();

describe("maximum4nombres(nombre1, nombre2, nombre3, nombre4)", function () {
  it("0, 1, 2, 3", function () {
    expect(Fonctions.maximum4nombres(0, 1, 2, 3)).toBe(3);
  });

  it("0, 1, 4, 3", function () {
    expect(Fonctions.maximum4nombres(0, 1, 4, 3)).toBe(4);
  });

  it("0, 5, 2, 3", function () {
    expect(Fonctions.maximum4nombres(0, 1, 2, 3)).toBe(5);
  });

  it("7, 1, 2, 3", function () {
    expect(Fonctions.maximum4nombres(0, 1, 2, 3)).toBe(7);
  });

  it("0, 1, 3, 3", function () {
    expect(Fonctions.maximum4nombres(0, 1, 2, 3)).toBe(3);
  });

  it("1, 3, 3, 1", function () {
    expect(Fonctions.maximum4nombres(0, 1, 2, 3)).toBe(3);
  });
});

xdescribe("ecartDurees(heure1, minute1, seconde1, heure2, minute2, seconde2)", function () {
  it("23:42:21 - 13:21:42", function () {
    expect(Fonctions.ecartDurees(23, 42, 21, 13, 21, 42)).toBe(37239);
  });

  it("12:12:12 - 22:22:22", function () {
    expect(Fonctions.ecartDurees(12, 12, 12, 22, 22, 22)).toBe(36610);
  });
});

xdescribe("estBissextile(annee)", function () {
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

xdescribe("nombreJours(mois, annee)", function () {
  it("2, 2010", function () {
    expect(Fonctions.nombreJours(2, 2010)).toBe(28);
  });

  it("2, 2012", function () {
    expect(Fonctions.nombreJours(2, 2012)).toBe(29);
  });

  it("5, 2013", function () {
    expect(Fonctions.nombreJours(5, 2013)).toBe(31);
  });

  it("6, 1985", function () {
    expect(Fonctions.nombreJours(6, 1985)).toBe(30);
  });
});

xdescribe("dateValide(jour, mois, annee)", function () {
  it("2/3/1980", function () {
    expect(Fonctions.dateValide(2, 3, 1980)).toBe(true);
  });

  it("11/6/1985", function () {
    expect(Fonctions.dateValide(11, 6, 1985)).toBe(true);
  });

  it("32/8/2012", function () {
    expect(Fonctions.dateValide(32, 8, 2012)).toBe(false);
  });

  it("28/13/2010", function () {
    expect(Fonctions.dateValide(28, 13, 2010)).toBe(false);
  });

  it("29/2/2017", function () {
    expect(Fonctions.dateValide(29, 2, 2017)).toBe(false);
  });

  it("29/2/2016", function () {
    expect(Fonctions.dateValide(29, 2, 2016)).toBe(true);
  });
});
