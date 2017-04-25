var Conditions = require("./conditions");
var conditions = new Conditions();

describe("maximum2Nombres(nombre1, nombre2)", function () {
  it("0 et 0", function () {
    expect(conditions.maximum2Nombres(0, 0)).toEqual(0);
  });

  it("-1 et 1", function () {
    expect(conditions.maximum2Nombres(-1, 1)).toEqual(1);
  });

  it("1 et 3", function () {
    expect(conditions.maximum2Nombres(1, 3)).toEqual(3);
  });
});

xdescribe("maximum3Nombres(nombre1, nombre2, nombre3)", function () {
  it("0 et 0 et 0", function () {
    expect(conditions.maximum3Nombres(0, 0, 0)).toEqual(0);
  });

  it("-1 et 0 et 1", function () {
    expect(conditions.maximum3Nombres(-1, 0, 1)).toEqual(1);
  });

  it("1 et 3 et 2", function () {
    expect(conditions.maximum3Nombres(1, 3, 2)).toEqual(3);
  });

  it("7 et 6 et 5", function () {
    expect(conditions.maximum3Nombres(7, 6, 5)).toEqual(7);
  });
});

xdescribe("signe(nombre)", function () {
  it("-1", function () {
    expect(conditions.signe(-1)).toEqual("négatif");
  });

  it("0", function () {
    expect(conditions.signe(0)).toEqual("nul");
  });

  it("1", function () {
    expect(conditions.signe(1)).toEqual("positif");
  });
});

xdescribe("typeTriangle(cote1, cote2, cote3)", function () {
  it("3 et 3 et 3", function () {
    expect(conditions.typeTriangle(3, 3, 3)).toEqual("équilatéral");
  });

  it("1 et 1 et 2", function () {
    expect(conditions.typeTriangle(1, 1, 2)).toEqual("isocèle");
  });

  it("1 et 2 et 1", function () {
    expect(conditions.typeTriangle(1, 2, 1)).toEqual("isocèle");
  });

  it("2 et 1 et 1", function () {
    expect(conditions.typeTriangle(2, 1, 1)).toEqual("isocèle");
  });

  it("1 et 2 et 3", function () {
    expect(conditions.typeTriangle(1, 2, 3)).toEqual("quelconque");
  });
});

xdescribe("valeursIdentiques(nombre1, nombre2, nombre3)", function () {
  it("1 et 2 et 3", function () {
    expect(conditions.valeursIdentiques(1, 2, 3)).toEqual(0);
  });

  it("1 et 1 et 2", function () {
    expect(conditions.valeursIdentiques(1, 1, 2)).toEqual(2);
  });

  it("1 et 1 et 1", function () {
    expect(conditions.valeursIdentiques(1, 1, 1)).toEqual(3);
  });
});

xdescribe("jourDeLaSemaine(numeroJour)", function () {
  it("1", function () {
    expect(conditions.jourDeLaSemaine(1)).toEqual("lundi");
  });

  it("2", function () {
    expect(conditions.jourDeLaSemaine(2)).toEqual("mardi");
  });

  it("3", function () {
    expect(conditions.jourDeLaSemaine(3)).toEqual("mercredi");
  });

  it("4", function () {
    expect(conditions.jourDeLaSemaine(4)).toEqual("jeudi");
  });

  it("5", function () {
    expect(conditions.jourDeLaSemaine(5)).toEqual("vendredi");
  });

  it("6", function () {
    expect(conditions.jourDeLaSemaine(6)).toEqual("samedi");
  });

  it("7", function () {
    expect(conditions.jourDeLaSemaine(7)).toEqual("dimanche");
  });

  it("0", function () {
    expect(conditions.jourDeLaSemaine(0)).toEqual("erreur");
  });

  it("13", function () {
    expect(conditions.jourDeLaSemaine(13)).toEqual("erreur");
  });
});

xdescribe("nombreJours(mois)", function () {
  it("1", function () {
    expect(conditions.nombreJours(1)).toEqual(31);
  });

  it("2", function () {
    expect(conditions.nombreJours(2)).toEqual(28);
  });

  it("3", function () {
    expect(conditions.nombreJours(3)).toEqual(31);
  });

  it("4", function () {
    expect(conditions.nombreJours(4)).toEqual(30);
  });

  it("5", function () {
    expect(conditions.nombreJours(5)).toEqual(31);
  });

  it("6", function () {
    expect(conditions.nombreJours(6)).toEqual(30);
  });

  it("7", function () {
    expect(conditions.nombreJours(7)).toEqual(31);
  });

  it("8", function () {
    expect(conditions.nombreJours(8)).toEqual(31);
  });

  it("9", function () {
    expect(conditions.nombreJours(9)).toEqual(30);
  });

  it("10", function () {
    expect(conditions.nombreJours(10)).toEqual(31);
  });

  it("11", function () {
    expect(conditions.nombreJours(11)).toEqual(30);
  });

  it("12", function () {
    expect(conditions.nombreJours(12)).toEqual(31);
  });
});

xdescribe("intervalle(nombre1, nombre2, nombre3)", function () {
  it("1 est entre 0 et 2", function () {
    expect(conditions.intervalle(1, 0, 2)).toBe(true);
  });

  it("1 est entre 2 et 3", function () {
    expect(conditions.intervalle(1, 2, 3)).toBe(false);
  });

  it("1 est entre 2 et 0", function () {
    expect(conditions.intervalle(1, 2, 0)).toBe(true);
  });
});

xdescribe("prixPhotocopies(nombre)", function () {
  it("3", function () {
    expect(conditions.prixPhotocopies(3)).toEqual(0.30);
  });

  it("10", function () {
    expect(conditions.prixPhotocopies(10)).toEqual(1);
  });

  it("11", function () {
    expect(conditions.prixPhotocopies(11)).toEqual(1.09);
  });

  it("19", function () {
    expect(conditions.prixPhotocopies(19)).toEqual(1.81);
  });

  it("20", function () {
    expect(conditions.prixPhotocopies(20)).toEqual(1.9);
  });

  it("29", function () {
    expect(conditions.prixPhotocopies(29)).toEqual(2.71);
  });

  it("30", function () {
    expect(conditions.prixPhotocopies(30)).toEqual(2.8);
  });

  it("31", function () {
    expect(conditions.prixPhotocopies(31)).toEqual(2.88);
  });

  it("56", function () {
    expect(conditions.prixPhotocopies(56)).toEqual(4.88);
  });
});

xdescribe("stationnementAlternatif(jour, numeroMaison)", function () {
  it("Le 1er devant le numéro 31", function () {
    expect(conditions.stationnementAlternatif(1, 31)).toBe(true);
  });

  it("Le 15 devant le numéro 2", function () {
    expect(conditions.stationnementAlternatif(15, 2)).toBe(false);
  });

  it("Le 16 devant le numéro 126", function () {
    expect(conditions.stationnementAlternatif(16, 126)).toBe(true);
  });

  it("Le 31 devant le numéro 37", function () {
    expect(conditions.stationnementAlternatif(31, 37)).toBe(false);
  });
});
