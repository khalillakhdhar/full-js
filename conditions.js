for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log(i)
    }
}
var membres=["membre1","membre2","membre3"] // tableau classique
var personne=["khalil",33,"Tunisie",true] // tableau mixte 
tab2=[1,2,3,4,5,6,7,8,9,10]
var user={ nom:"khalil",age:33,pays:"Tunisie"} // objet of type json
// json = javascript object notation

for(let x in membres){
    console.log(membres[x])
}
for(var i=0;i<personne.length;i++){ // parcourir un tableau mixte à partir de l'index 0
    console.log(personne[i])
}


