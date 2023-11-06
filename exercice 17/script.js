/*
    Des fonctions, c'est bien. Avec des paramètres, c'est mieux.

    Il est possible, lorsqu'on appelle une fonction, de lui transmettre une ou plusieurs valeurs exploitable
    ensuite dans le bloc associé à la fonction.

    Vous avez déjà fait cela avec des fonctions prédéfinies comme writeInDocument ou drawRandomSquare par exemple.

    Pour que l'on puisse transmettre une valeur à une fonction, il faut que celle-ci ait été déclarée avec un paramètre.
    Un paramètre est une variable un peu spéciale qui va permettre de transmettre une valeur à l'appel de la fonction.

    Par exemple, pour déclarer une fonction avec 1 paramètre on écrira :

    let nomDeLaFonction = function(nomDuParametre){
        // Bloc d'instructions pouvant faire usage de nomDuParametre
    }

    Et pour appeler nomDeLaFonction, on écrire (par exemple) : nomDeLaFonction(valeur)
    Ainsi le bloc de code associé sera exécuté pour nomDuParametre valant valeur

    Suivez et complétez les indications ci-après.

*/

// Voici la déclaration de la fonction tableDe7. Appelez-là depuis la console de votre navigateur pour voir ce qu'elle fait
let tableDe7 = function(){
    for( let i=0; i<11; i++){
        writeInDocument( 7 + " x " + i + " = " + 7*i);
    }
}


// Comme on ne souhaite pas déclarer une fonction par table, on se propose d'écrire une fonction tableDe
// qui prendra en paramètre le nombre de la table à afficher. Ainsi on s'attend on comportement suivant : 
//  - si on appelle tableDe(4), on affichera la table de 4
//  - si on appelle tableDe(3), on affichera la table de 3
//  - si on appelle tableDe(12), on affichera la table de 12
//  - ..
// Complétez la déclaration de la fonction tableDe puis testez-là depuis la console de votre navigateur
let tableDe = function( nb ){
    // ???
}