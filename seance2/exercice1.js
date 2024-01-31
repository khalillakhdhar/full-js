const net =3000;
function CalculeTTC(net)
{ 
    let tva=0;
    if(net <1000)
    {
        tva=net*0.12;
    }
    else if(net<15000)
    {
        tva=net*0.15;
    }
    else
    {
        tva=net*0.2;
    }
    var ttc=net+tva;
    console.log(`le montant de la tva est : ${tva} et le montant ttc est : ${ttc} pour un montant net de : ${net}`) // interpolation de chaine de caractere avec altgr+7
}
CalculeTTC(net);