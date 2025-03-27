function longueursMots(mots) {
    let newTab = []
    for(let i = 0; i < mots.length; i++){
        let x = mots[i]
        newTab.push(x.length)        
    }return newTab
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]