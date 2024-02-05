let nombres = [2, 3, 4, 7, 11, 13, 17, 18, 20]; // Exemple de tableau

function estPremier(num) {
    for (let i = 2; i <= num/2; i++) { // Math.sqrt(num) est plus rapide que num/2
        if (num % i === 0) return false;
    }
    return num > 1;
}
/*
exécution manuelle avec num = 17
i = 2, 17 % 2 = 1, i++
i = 3, 17 % 3 = 2, i++
i = 4, 17 % 4 = 1, i++
i = 5, 17 % 5 = 2, i++
i = 6, 17 % 6 = 5, i++
i = 7, 17 % 7 = 3, i++
i = 8, 17 % 8 = 1, i++
i = 9, 17 % 9 = 8, i++
// arrêt car i > 17/2
*/
/*
exécution manuelle avec num = 6
i = 2, 6 % 2 = 0, return false



*/




/*
nombres.forEach(num => {
    if (estPremier(num)) {
        console.log(num + " est un nombre premier.");
    }
});
*/
//parcourir le tableau et afficher les nombres premiers
/*for (let i = 0; i < nombres.length; i++) {
    if (estPremier(nombres[i])) {
        console.log(nombres[i] + " est un nombre premier.");
    }
}
*/
//parcourir le tableau et afficher les nombres premiers for(let x of nombres)
for (let x of nombres) {
    if (estPremier(x)) {
        console.log(x + " est un nombre premier.");
    }
}