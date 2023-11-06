/*
    Premières fonctions

    Une fonction permet d'associer un nom à un bloc d'instructions. Et via ce nom, on va pouvoir
    faire exécuter le bloc d'instructions associées chaque fois qu'on l'appelera.

    En JS, on peut voir une fonction comme une variable dont la valeur est un bloc de code.

    Avant toute chose, une fonction doit être déclarée. Sinon elle n'existe pas.
    Déclarer une fonction, c'est lui donner un nom et y associer le bloc d'instructions correspondant.
    La syntaxe à RESPECTER est :

    let nomDeLaFonction = function(){
        // bloc d'instructions associé à la fonction nomDeLaFonction
    }

    La déclaration d'un fonction ne provoque pas l'exécution du bloc associé.
    Pour ce, il faut ensuite APPELER la fonction.
    La syntaxe à respecter est alors : 
    nomDeLaFoncton()

    Et chaque fois que l'on appelera la fonction, la machine exécutera le bloc associé.


*/


// Voici la déclaration de la fonction smiley. Depuis la console du navigateur, appelez-là plusieurs fois et constatez.
let smiley = function(){
    writeInDocument(" (\\___/) ");
    writeInDocument(" (='.'=) ");
    writeInDocument(" (¨)_(¨) ");
}


// Déclarez ci-dessous une fonction manySmiley qui affiche 100 fois le motif de la fonction smiley
// Efforcez-vous de refaire usage de la fonction smiley déjà déclarée
// Testez le bon fonctionnement de votre fonction depuis la console du navigateur
let manySmiley = function( nb ){
   // ???
}