// il y a deux types de parametre en js const et variable (let ou var)
const pi=3.14;
var diametre=10;
// je peux  changer le diametre
//pi=3.1415;
diametre=15;
// impossible de changer la valeur de pi
let perimetre=pi*diametre;
console.log(perimetre);
function rectangle(hauteur,largeur)
{
    let surface=hauteur*largeur;
    console.log("la surface du rectangle est : "+surface);
}
rectangle(10,20);