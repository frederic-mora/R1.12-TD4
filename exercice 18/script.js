/*
    Fonctions avec paramètres et valeur de retour

    Les paramètres permettent de transmettre une valeur au moment de l'appel de la fonction.

    Ce qui se passe ensuite dans la fonction reste dans la fonction : rien n'est "visible" en dehors du bloc de la fonction.

    Mais il est tout de même possible de récupérer une valeur calculer par la fonction à l'issue de son appel.
    On appelle cela une valeur de retour.

    Suivez les indications suivantes et complétez le code lorsque demandé.


*/

// Voici la déclaration de la fonction convertInSecondes. Elle prend 3 paramètres représentant, un nombre d'heure, de minutes et de secondes.
// Elle calcule l'équivalent en seconde et RETOURNE le résultat de ce calcul grâce à l'instruction return
let convertInSecondes = function(h, m, s)
{
    let resultat = h*3600 + 60*m + s;
    return resultat;
}

// Elapsed est un objet représentant une durée
let elapsed = {
    h: 3,
    m: 12,
    s: 34
}

// Example d'appel à convertInSecondes pour calculer l'équivalent en secondes de la durée représentée par elapsed
// NOTEZ BIEN comme se fait l'appel pour pouvoir récupérer dans la variable duree la valeur retournée par la fonction.
let duree = convertInSecondes(elapsed.h, elapsed.m, elapsed.s);

writeInDocument( elapsed.h + ":" + elapsed.m + ":" + elapsed.s + " fait " + duree + " secondes");

// En vous inspirant de l'example de convertInSecondes, complétez le code ci-après :

// somebody représente la taille et le poids d'une personne
let somebody = {
    taille: 1.78,
    poids: 123
}

// Complétez le code de la fonction ci-dessous de sorte à retourner la valeur de son IMC (https://fr.wikipedia.org/wiki/Indice_de_masse_corporelle)
let calculIMC = function(t, p){
    // ???
}

// Complétez le code ci-dessous de sorte à retourner l'interprétation de la valeur de l'IMC (voir tableau sur la page wikipedia)
let interpreteIMC = function(value){
    // ???
}

// Faites afficher dans la page l'IMC de somebody et le résultat de son interprétation
// ???
