//Even or odd

let a=Number(prompt("Enter a Number:"));
if (a%2===0) {
    console.log("Even Number"); 
} else {
    console.log("Odd Number");
    
}


//Largest of 3 Numbers
let num1=Number(prompt("Enter 1st numbers:"))
let num2=Number(prompt("Enter 2nd numbers:"))
let num3=Number(prompt("Enter 3rd numbers:"))
console.log("Biggest Number is: "+Math.max(num1,num2,num3));


//Calculator using switch
let num1=Number(prompt("Enter 1st Number:"))
let num2=Number(prompt("Enter 2nd Number:"))
let a =Number(prompt(
    "Choose 1 for Addition\n" +
    "Choose 2 for Subtraction\n" +
    "Choose 3 for Multiplication\n" +
    "Choose 4 for Division\n" +
    "Choose 5 for Modulus\n" +
    "Choose 6 for Power"
));
switch (Number(a)) {
    case 1:
        console.log("Addition of "+num1+" and "+num2+" is: "+(num1+num2));
        break;
    case 2:
        console.log("Subtraction of "+num1+" and "+num2+" is: "+(num1-num2));
        break;
    case 3:
        console.log("Multiplication of "+num1+" and "+num2+" is: "+(num1*num2));
        break;
    case 4:
        if (num2==0) {
            console.log("Invalid input");            
        }else{
        console.log("Division of "+num1+" and "+num2+" is: "+(num1/num2));
        }
        break;
    case 5:
        console.log("Modulus of "+num1+" and "+num2+" is: "+(num1%num2));
        break;
    case 6:
        console.log(num1+" to the power of "+num2+" is: "+(num1**num2));
        break;
    default:
        console.log("Invalid Input for Operation... Choose any Number between 1 to 6");    
}


//Grade System
let mark=Number(prompt("Enter Your Mark:"));
if(mark>=90){
    console.log("Grade A");    
}else if(mark>=75){
    console.log("Grade B");    
}else if(mark>=50){
    console.log("Grade C");    
}else {
    console.log("Fail");    
}


//Positive / Negative / Zero
let a=Number(prompt("Enter a Number:"));
if(isNaN(a)) {
    console.log("Invalid input");
}
else if (a>0) {
    console.log(a+" is a Positive number");
}else if (a<0){
    console.log(a+" is a Negative Number");    
}else{
    console.log("Zero");
}


//Sum of Digits
let num=prompt("Enter a number:");
let b=num.length -1; 

let sum=0;
while (b>=0) {  
    sum+= Number(num.charAt(b)) 
    b--;  
}
console.log("Sum of "+num+" is: "+sum);


//Palindrome Number
let num = prompt("Enter input:")
    .toLowerCase()
    .replaceAll(" ", "");
let b=num.length -1;                 
let result="";                       
while (b>=0) {                       
    result+=num.charAt(b);           
    b--;                             
}
if (num===result) {
    console.log("Your Input "+num+" is a Palindrome");
}else{
    console.log("Your Input "+num+" is not a Palindrome");
}


//count of digits
let input=prompt("Enter Input:");
if (typeof input === "string") {
    console.log(input.length);
    
} else {
    s=input.toString().length
console.log(s);
}

//Multiplication Table
let a=Number(prompt("Enter a number to print table:"))

for(let i=1;i<=10;i++){
    ans=i*a;
    console.log(i+" * "+a+" = "+ans);    
}








