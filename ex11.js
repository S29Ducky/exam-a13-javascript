function filtrerPairs(tab) {
    let newTab = []

    for(let i = 0; i < tab.length; i++){
        let x = tab[i]
        if(x % 2 == 0){
            newTab.push(x)
        }
    }
    return newTab
}

console.log(filtrerPairs([1, 2, 3, 4, 5, 6])); // Résultat attendu : [2, 4, 6]
console.log(filtrerPairs([0, -2, -4, 18, 5, 6])); // Résultat attendu : [0, -2, -4, 18, 6]