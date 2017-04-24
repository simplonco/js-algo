var Basics = function() {};

// Calculer la somme de 2 nombres donnés
Basics.prototype.somme2Nombres = function (nombre1, nombre2) {
  return (true);
};

// Calculer la moyenne de 2 nombres donnés
Basics.prototype.moyenne2Nombres = function (nombre1, nombre2) {
  return (true);
};

// Calculer l'aire d'un triangle dont on connait la base et la hauteur
Basics.prototype.aireTriangle = function (base, hauteur) {
  return (true);
};

// Calculer la circonférence d'un cercle dont on connait le rayon
Basics.prototype.circonferenceCercle = function (rayon) {
  return (true);
};

// Calculer l'aire d'un cercle dont on connait le rayon
Basics.prototype.aireCercle = function (rayon) {
  return (true);
};

// Calculer la TVA (20%) à partir du prix hors TVA d'un produit
Basics.prototype.tva = function (prixHT) {
  return (true);
};

// Je place un montant (capital) à la banque pendant 1 an.
// Calculer les intérêts que je toucherai. Le taux est de 2%.
Basics.prototype.interets = function (capital) {
  return (true);
};

// Je place un montant (capital) à la banque pendant 1 an.
// Calculer le nouveau capital (capital de départ + intérêts).
Basics.prototype.placement = function (capital, tauxInteret) {
  return (true);
};

// Calculer le montant total d'une facture dont on connait
// le prix unitaire hors TVA, la quantité de produits et le taux de TVA.
Basics.prototype.prixTTC = function (prixUnitaireHT, quantite, tauxTVA) {
  return (true);
};

// Calculer la durée (en secondes) d'un trajet dont on connait
// la vitesse moyenne (en m/s == mètres par seconde) et la distance (en km).
Basics.prototype.dureeTrajet = function (vitesseMoyenne, distance) {
  return (true);
};

// Calculer le nombre de secondes écoulées depuis minuit
Basics.prototype.secondes = function (heure, minute, seconde) {
  return (true);
};

module.exports = Basics;
