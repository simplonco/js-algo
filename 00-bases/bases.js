var Bases = function() {};

// Calculer la somme de 2 nombres donnés
Bases.prototype.somme2Nombres = function (nombre1, nombre2) {
  return (true);
};

// Calculer la moyenne de 2 nombres donnés
Bases.prototype.moyenne2Nombres = function (nombre1, nombre2) {
  return (true);
};

// Calculer l'aire d'un triangle dont on connait la base et la hauteur
Bases.prototype.aireTriangle = function (base, hauteur) {
  return (true);
};

// Calculer la circonférence d'un cercle dont on connait le rayon
Bases.prototype.circonferenceCercle = function (rayon) {
  return (true);
};

// Calculer l'aire d'un cercle dont on connait le rayon
Bases.prototype.aireCercle = function (rayon) {
  return (true);
};

// Calculer la TVA (20%) à partir du prix hors TVA d'un produit
Bases.prototype.tva = function (prixHT) {
  return (true);
};

// Je place un montant (capital) à la banque pendant 1 an.
// Calculer les intérêts que je toucherai. Le taux est de 2%.
Bases.prototype.interets = function (capital) {
  return (true);
};

// Je place un montant (capital) à la banque pendant 1 an.
// Calculer le nouveau capital (capital de départ + intérêts).
Bases.prototype.placement = function (capital, tauxInteret) {
  return (true);
};

// Calculer le montant total d'une facture dont on connait
// le prix unitaire hors TVA, la quantité de produits et le taux de TVA.
Bases.prototype.prixTTC = function (prixUnitaireHT, quantite, tauxTVA) {
  return (true);
};

// Calculer la durée (en secondes) d'un trajet dont on connait
// la vitesse moyenne (en m/s == mètres par seconde) et la distance (en km).
Bases.prototype.dureeTrajet = function (vitesseMoyenne, distance) {
  return (true);
};

// Calculer le nombre de secondes écoulées depuis minuit
Bases.prototype.secondes = function (heure, minute, seconde) {
  return (true);
};

module.exports = Bases;
