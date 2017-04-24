var Basics = require("./basics");
var basics = new Basics();

describe("Somme de 2 nombres", function () {
  it("1 + 2", function () {
    expect(basics.somme2Nombres(1, 2)).toEqual(3);
  });

  it("(-1) + 2", function () {
    expect(basics.somme2Nombres(-1, 2)).toEqual(1);
  });

  it("1 + (-2)", function () {
    expect(basics.somme2Nombres(1, -2)).toEqual(-1);
  });

  it("(-1) + (-2)", function () {
    expect(basics.somme2Nombres(-1, -2)).toEqual(-3);
  });

  it("0 + 0", function () {
    expect(basics.somme2Nombres(0, 0)).toEqual(0);
  });
});

describe("Moyenne de 2 nombres", function () {
  it("Moyenne de 1 et 1", function () {
    expect(basics.moyenne2Nombres(1, 1)).toEqual(1);
  });

  it("Moyenne de 1 et 2", function () {
    expect(basics.moyenne2Nombres(1, 2)).toEqual(1.5);
  });

  it("Moyenne de (-1) et 1", function () {
    expect(basics.moyenne2Nombres(-1, 1)).toEqual(0);
  });
});


describe("Aire d'un triangle", function () {
  it("Base = 1 | Hauteur = 2", function () {
    expect(basics.aireTriangle(1, 2)).toEqual(1);
  });

  it("Base = 3 | Hauteur = 5", function () {
    expect(basics.aireTriangle(3, 5)).toEqual(7.5);
  });
});

describe("Circonférence d'un cercle", function () {
  it("Rayon = 1", function () {
    expect(basics.circonferenceCercle(1)).toEqual(6.283185307179586);
  });

  it("Rayon = 3", function () {
    expect(basics.circonferenceCercle(3)).toEqual(18.84955592153876);
  });
});


describe("Aire d'un cercle", function () {
  it("Rayon = 2", function () {
    expect(basics.aireCercle(2)).toEqual(12.566370614359172);
  });

  it("Rayon = 3", function () {
    expect(basics.aireCercle(3)).toEqual(28.274333882308138);
  });
});

describe("TVA", function () {
  it("Prix HT = 100 euros", function () {
    expect(basics.tva(100)).toEqual(20);
  });

  it("Prix HT = 199 euros", function () {
    expect(basics.tva(199)).toEqual(39.800000000000004);
  });

  it("Prix HT = 1.99 euros", function () {
    expect(basics.tva(1.99)).toEqual(0.398);
  });
});

describe("Intérêts", function () {
  it("Pour 100 euros", function () {
    expect(basics.interets(100)).toEqual(2);
  });

  it("Pour 199 euros", function () {
    expect(basics.interets(199)).toEqual(3.98);
  });

  it("Pour 1.99 euros", function () {
    expect(basics.interets(1.99)).toEqual(0.0398);
  });
});

describe("Nouvelle valeur du capital placé", function () {
  it("Je place 100 euros à 3%", function () {
    expect(basics.placement(100, 3)).toEqual(103);
  });

  it("Je place 199 euros à 5%", function () {
    expect(basics.placement(199, 5)).toEqual(208.95000000000002);
  });

  it("Je place 1.99 euros à 1.5%", function () {
    expect(basics.placement(1.99, 1.5)).toEqual(2.01985);
  });
});

describe("Montant total de la facture TTC", function () {
  it("100 euros HT * 2 unités * TVA 20%", function () {
    expect(basics.prixTTC(100, 2, 20)).toEqual(240);
  });

  it("199 euros HT * 9 unités * TVA 20%", function () {
    expect(basics.prixTTC(199, 9, 20)).toEqual(2149.2);
  });

  it("1.99 euros HT * 42 unités * TVA 20%", function () {
    expect(basics.prixTTC(1.99, 42, 20)).toEqual(100.29599999999999);
  });
});

describe("Durée du trajet", function () {
  it("Vitesse moyenne = 4 m/s | Distance = 1 km", function () {
    expect(basics.dureeTrajet(4, 1)).toEqual(250);
  });

  it("Vitesse moyenne = 16 m/s | Distance = 4.2 km", function () {
    expect(basics.dureeTrajet(16, 4.2)).toEqual(262.5);
  });

  it("Vitesse moyenne = 123 m/s | Distance = 42 km", function () {
    expect(basics.dureeTrajet(123, 42)).toEqual(341.4634146341463);
  });
});

describe("Secondes passées depuis minuit", function () {
  it("1 heure, 1 minute et 1 seconde", function () {
    expect(basics.secondes(1, 1, 1)).toEqual(3661);
  });

  it("13 heures, 42 minutes et 42 secondes", function () {
    expect(basics.secondes(13, 42, 42)).toEqual(49362);
  });

  it("1 heure, 1 minute et 0 seconde", function () {
    expect(basics.secondes(1, 1, 0)).toEqual(3660);
  });

  it("1 heure, 0 minute et 1 seconde", function () {
    expect(basics.secondes(1, 0, 1)).toEqual(3601);
  });

  it("0 heure, 1 minute et 1 seconde", function () {
    expect(basics.secondes(0, 1, 1)).toEqual(61);
  });
});
