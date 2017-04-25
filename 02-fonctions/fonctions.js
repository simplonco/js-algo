var Basics = require("../00-basics/basics");
var Conditions = require("../01-conditions/conditions");

var Fonctions = function() {};

// Recherche et retourne le plus grand nombre.
// Utilise et ré-utilise la fonction maximum2Nombres() de la série "Conditions".
Fonctions.prototype.maximum4nombres = function (nombre1, nombre2, nombre3, nombre4) {

};

// Calcule l'écart en secondes entre 2 durées.
// Utilie et ré-utilie la fonction secondes() de la série "Basics".
Fonctions.prototype.ecartDurees = function (heure1, minute1, seconde1,
                                            heure2, minute2, seconde2) {

};

// Retourne vrai si l'année est bissextile, faux si elle ne l'est pas.
// Une année est bissextile si :
// - elle est multiple de 4;
// - elle n'est pas multiple de 100;
// - elle est multiple de 400;
// 2012 et 2400 sont bissextiles. 2010 et 2100 ne le sont pas.
Fonctions.prototype.estBissextile = function (annee) {

};

// Retourne le nombre de jours qu'il y a dans un mois donné.
// Si c'est le mois de février, il retourner 28 ou 29 selon si l'année est bissextile.
// Pour ce faire, utilise la fonction estBissextile() à bon escient.
Fonctions.prototype.nombreJours = function (mois, annee) {

};

// Vérifie la validité d'une date et retourne vrai si la date valide, sinon faux.
// Ré-utilise les fonctions précédentes.
Fonctions.prototype.dateValide = function (jour, mois, annee) {

};

module.exports = Fonctions;
