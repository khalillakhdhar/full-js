let tableau = [34, 7, 23, 32, 5, 62];

let min = tableau[0];
let max = tableau[0];
/*
tableau.forEach(num => {
    if (num < min) min = num;
    if (num > max) max = num;
});
*/
for (let num of tableau) {
    if (num < min) min = num;
    if (num > max) max = num;
}
console.log("Le plus petit nombre est : " + min);
console.log("Le plus grand nombre est : " + max);
