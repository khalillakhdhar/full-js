let tableau1 = [1, 3, 5,7];
let tableau2 = [2, 4, 6,8,11,13];
let tableauFusionne = [];
/*
i=0, j=0  
1<2 => tableauFusionne=[1], i++
3<2 => tableauFusionne=[1,2], j++
3<4 => tableauFusionne=[1,2,3], i++
5<4 => tableauFusionne=[1,2,3,4], j++
5<6 => tableauFusionne=[1,2,3,4,5], i++
7<6 => tableauFusionne=[1,2,3,4,5,6], j++
7<8 => tableauFusionne=[1,2,3,4,5,6,7], i++
*/
let i = 0, j = 0;

while (i < tableau1.length && j < tableau2.length) {
    if (tableau1[i] < tableau2[j]) {
        tableauFusionne.push(tableau1[i]);
        i++;
    } else {
        tableauFusionne.push(tableau2[j]);
        j++;
    }
}

// Ajouter les éléments restants
while (i < tableau1.length) {
    tableauFusionne.push(tableau1[i]);
    i++;
}

while (j < tableau2.length) {
    tableauFusionne.push(tableau2[j]);
    j++;
}

console.log(tableauFusionne);
