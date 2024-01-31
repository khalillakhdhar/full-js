const n=365;
function div3(n){
    // n= 366
    // parseInt sur un entier élimine la partie décimale
    let c=parseInt(n/100); // c=3
    let d=parseInt((n%100)/10); // d=6
    let u=n%10; // u=6
    let somme=c+d+u;
    if(somme%3==0)
    {
        console.log("le nombre est divisible par 3");
    }
    else
    {
        console.log("le nombre n'est pas divisible par 3");
    }
}
div3(n);