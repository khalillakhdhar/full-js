const a=15
const b=6
function pgcd(a,b)
{
    let v1=a;
    let v2=b;
    while(a!=b)
    {
        if(a>b)
        {
            a=a-b;
        }
        else
        {
            b=b-a;
        }
    }
    console.log("PGCD("+v1+","+v2+")="+a);


}
pgcd(a,b);