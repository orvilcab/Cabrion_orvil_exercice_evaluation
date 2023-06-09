//1 Déclarez une variable "age" avec une valeur de 25.
let age=25

//2 Déclarez une variable "nom" avec une valeur de "Jean".
const nom = "jean"

// 3 Créez une variable "somme" et assignez-lui la somme de deux nombres de votre choix.
let somme = 3+15

// 4 Créez une variable "chaine" qui contient une chaîne de caractères et utilisez la méthode "toUpperCase()" pour la mettre en majuscules.
let chaine = "mon petit jardin"
let result = chaine.toUpperCase();
console.log(result);

// 5 Créez une variable "tableau" qui contient un tableau de nombres et utilisez la méthode "length" pour en trouver la longueur.
let tableau = [1,2,3,4,5]
let result = tableau.length;
console.log(result);

//6 Créez une variable "objet" qui contient un objet avec deux propriétés : "nom" et "age". Utilisez la notation pointée pour accéder à la propriété "nom".
let objet= {nom: "thierry", age: 25}
console.log(objet.nom);
console.log(objet.age);

// 7 Créez une variable "nombre" qui contient un nombre à virgule flottante et utilisez la méthode "toFixed()" pour arrondir le nombre à deux décimales.
let nombre= 2.3658987899;
let result= nombre.toFixed(2);
console.log(result);

// 8 Créez une variable "date" qui contient la date actuelle et utilisez la méthode "getMonth()" pour trouver le mois actuel.
let d = new Date();
let date = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
console.log(date);

// 9 Créez une variable "tableau2" qui contient un tableau de chaînes de caractères et utilisez la méthode "join()" pour les fusionner en une seule chaîne de caractères séparée par des virgules.
let tableau = ['r','v','s','x','a'];
let result = tableau.join();
console.log(result);

LES TABLEAUX

 

>>> Exercice 1
Créez un tableau contenant les noms de trois de vos amis. 
Affichez ensuite le premier élément du tableau dans la console.

let tableau = ["albert", "bertrand","jacques"];
console.log(tableau[0]);

>>> Exercice 2
Créez un tableau contenant les nombres 1, 2, 3, 4 et 5. 
Utilisez une boucle pour afficher chaque élément du tableau dans la console

let tableau = [1,2,3,4,5];
let i =0;
while(i<tableau.length){
 console.log(tableau[i]); 
  i++;
  
}

>>> Exercice 3
Créez un tableau contenant les nombres 1, 2, 3, 4 et 5. 
Utilisez une méthode de tableau pour ajouter le nombre 6 à la fin du tableau.

let tableau = [1,2,3,4,5];
tableau.push(6);
console.log(tableau);

>>> Exercice 4
Créez un tableau contenant les nombres 1, 2, 3, 4 et 5. Utilisez 
une méthode de tableau pour supprimer le dernier élément du tableau.

let tableau = [1,2,3,4,5];
tableau.pop(5);
console.log(tableau);

>>> Exercice 5
Créez un tableau contenant les nombres 1, 2, 3, 4 et 5. Utilisez 
une méthode de tableau pour ajouter le nombre 0 au début du tableau.

let tableau = [1,2,3,4,5];
tableau.unshift(0);
console.log(tableau);


>>> Exercice 6
Créez un tableau contenant les nombres 1, 2, 3, 4 et 5. Utilisez une méthode de 
tableau pour supprimer le premier élément du tableau.

let tableau = [1,2,3,4,5];
tableau.shift();
console.log(tableau);
