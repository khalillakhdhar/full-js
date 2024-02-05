// lire le nombre depuis la console
function  divise(nombre)
{
if (nombre % 2 === 0 && nombre % 3 === 0) {
//    console.log(nombre + " est divisible par 2 et 3.");
return nombre + " est divisible par 2 et 3.";
} else if (nombre % 2 === 0) {
    //console.log(nombre + " est divisible par 2.");
    return nombre + " est divisible par 2.";
} else if (nombre % 3 === 0) {
    //console.log(nombre + " est divisible par 3.");
    return nombre + " est divisible par 3.";
} else {
    //console.log(nombre + " n'est divisible ni par 2 ni par 3.");
    return nombre + " n'est divisible ni par 2 ni par 3.";
}
}
//let nombre = 30; // Vous pouvez changer cette valeur pour tester
console.log(divise(30));
console.log(divise(7));
console.log(divise(9));



