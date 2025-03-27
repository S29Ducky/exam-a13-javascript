function multiplierParDeux(tab) {
    let newTab = []
    for(let i = 0; i < tab.length; i++){
        let x = tab[i]
        newTab.push(x * 2)
    }
    return newTab
}
console.log(multiplierParDeux([1, 2, 3])); // Résultat attendu : [2, 4, 6]