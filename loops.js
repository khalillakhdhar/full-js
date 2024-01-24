for(var i=1;i<=10;i++){
 if(i%2==0){ 
    // iteration simple
  console.log(i)
 }
}
pays=[ {nom:"maroc",capitale:"rabat"} ,{nom:"france",capitale:"paris"},{nom:"espagne",capitale:"madrid"}]
/*for(var j=0;j<pays.length;j++){
 console.log(pays[j].nom+" "+pays[j].capitale)
}
*/


for(let x in pays){
 console.log(pays[x].nom+" "+pays[x].capitale)
}
voitures=["bmw","mercedes","audi"]
for(let x of voitures){
 console.log(x)
}
var z=0
do{
    z++;
    console.log(z)
}
while(z<9)
z=0;
while (z!=0){
    console.log(z)
    z--;
}
