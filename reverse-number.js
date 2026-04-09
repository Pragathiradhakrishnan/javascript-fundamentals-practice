let num=12345;
let rem=0;
while(num>0){
    rem=rem*10+num%10  //5
    num=Math.floor(num/10);  //1234    
}
console.log(rem)
