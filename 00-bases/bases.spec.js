var Bases = require("./bases");
var bases = new Bases();

describe("somme2Nombres(nombre1, nombre2)", function () {
  it("1 + 2", function () {
    expect(bases.somme2Nombres(1, 2)).toEqual(3);
  });

  it("(-1) + 2", function () {
    expect(bases.somme2Nombres(-1, 2)).toEqual(1);
  });

  it("1 + (-2)", function () {
    expect(bases.somme2Nombres(1, -2)).toEqual(-1);
  });

  it("(-1) + (-2)", function () {
    expect(bases.somme2Nombres(-1, -2)).toEqual(-3);
  });

  it("0 + 0", function () {
    expect(bases.somme2Nombres(0, 0)).toEqual(0);
  });
});

xdescribe("moyenne2Nombres(nombre1, nombre2)", function () {
  it("1 et 1", function () {
    expect(bases.moyenne2Nombres(1, 1)).toEqual(1);
  });

  it("1 et 2", function () {
    expect(bases.moyenne2Nombres(1, 2)).toEqual(1.5);
  });

  it("(-1) et 1", function () {
    expect(bases.moyenne2Nombres(-1, 1)).toEqual(0);
  });
});


xdescribe("aireTriangle(base, hauteur)", function () {
  it("Base = 1 | Hauteur = 2", function () {
    expect(bases.aireTriangle(1, 2)).toEqual(1);
  });

  it("Base = 3 | Hauteur = 5", function () {
    expect(bases.aireTriangle(3, 5)).toEqual(7.5);
  });
});

xdescribe("circonferenceCercle(rayon)", function () {
  it("Rayon = 1", function () {
    expect(bases.circonferenceCercle(1)).toEqual(6.283185307179586);
  });

  it("Rayon = 3", function () {
    expect(bases.circonferenceCercle(3)).toEqual(18.84955592153876);
  });
});


xdescribe("aireCercle(rayon)", function () {
  it("Rayon = 2", function () {
    expect(bases.aireCercle(2)).toEqual(12.566370614359172);
  });

  it("Rayon = 3", function () {
    expect(bases.aireCercle(3)).toEqual(28.274333882308138);
  });
});

xdescribe("tva(prixHT)", function () {
  it("Prix HT = 100 euros", function () {
    expect(bases.tva(100)).toEqual(20);
  });

  it("Prix HT = 199 euros", function () {
    expect(bases.tva(199)).toEqual(39.800000000000004);
  });

  it("Prix HT = 1.99 euros", function () {
    expect(bases.tva(1.99)).toEqual(0.398);
  });
});

xdescribe("interets(capital)", function () {
  it("Pour 100 euros", function () {
    expect(bases.interets(100)).toEqual(2);
  });

  it("Pour 199 euros", function () {
    expect(bases.interets(199)).toEqual(3.98);
  });

  it("Pour 1.99 euros", function () {
    expect(bases.interets(1.99)).toEqual(0.0398);
  });
});

xdescribe("placement(capital, tauxInteret)", function () {
  it("Je place 100 euros à 3%", function () {
    expect(bases.placement(100, 3)).toEqual(103);
  });

  it("Je place 199 euros à 5%", function () {
    expect(bases.placement(199, 5)).toEqual(208.95000000000002);
  });

  it("Je place 1.99 euros à 1.5%", function () {
    expect(bases.placement(1.99, 1.5)).toEqual(2.01985);
  });
});

xdescribe("prixTTC(prixUnitaireHT, quantite, tauxTVA)", function () {
  it("100 euros HT * 2 unités * TVA 20%", function () {
    expect(bases.prixTTC(100, 2, 20)).toEqual(240);
  });

  it("199 euros HT * 9 unités * TVA 20%", function () {
    expect(bases.prixTTC(199, 9, 20)).toEqual(2149.2);
  });

  it("1.99 euros HT * 42 unités * TVA 20%", function () {
    expect(bases.prixTTC(1.99, 42, 20)).toEqual(100.29599999999999);
  });
});

xdescribe("dureeTrajet(vitesseMoyenne, distance)", function () {
  it("Vitesse moyenne = 4 m/s | Distance = 1 km", function () {
    expect(bases.dureeTrajet(4, 1)).toEqual(250);
  });

  it("Vitesse moyenne = 16 m/s | Distance = 4.2 km", function () {
    expect(bases.dureeTrajet(16, 4.2)).toEqual(262.5);
  });

  it("Vitesse moyenne = 123 m/s | Distance = 42 km", function () {
    expect(bases.dureeTrajet(123, 42)).toEqual(341.4634146341463);
  });
});

xdescribe("secondes(heure, minute, seconde)", function () {
  it("1 heure, 1 minute et 1 seconde", function () {
    expect(bases.secondes(1, 1, 1)).toEqual(3661);
  });

  it("13 heures, 42 minutes et 42 secondes", function () {
    expect(bases.secondes(13, 42, 42)).toEqual(49362);
  });

  it("1 heure, 1 minute et 0 seconde", function () {
    expect(bases.secondes(1, 1, 0)).toEqual(3660);
  });

  it("1 heure, 0 minute et 1 seconde", function () {
    expect(bases.secondes(1, 0, 1)).toEqual(3601);
  });

  it("0 heure, 1 minute et 1 seconde", function () {
    expect(bases.secondes(0, 1, 1)).toEqual(61);
  });
});
