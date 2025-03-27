function afficherElements(tab) {
    for(let i = 0; i < tab.length; i++){
        console.log(tab[i])
    }
}

afficherElements([1, 2, 3, 4]); // Affiche : 1, 2, 3, 4 (un par ligne)
afficherElements([-1, 28, 44, 0]); // Affiche : -1, 28, 44, 0 (un par ligne)
afficherElements([-60, 58, 0, 0]); // Affiche : -1, 28, 44, 0 (un par ligne)
