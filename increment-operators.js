let a=4;
let b=5;
let c=6;
let d=--a + --b + ++c + c++ + b-- + c-- - a-- + b-- + --c - ++c ;
console.log(d);


a=2;
b=3;
c=4;
d=a++ + ++b + c++ + ++a + b-- + --c + a + b + c;
console.log(d);

a = 2;
b = 3;
c = 4; 
d = 5;
e = 6;
console.log(a++ + b++ + ++c + ++d + --e + a + b + c + d + e);

a = 1;
b = 2;
c = 3;
d = 4;
e = 5;
f = 6;
console.log(++a + b-- + c++ + --d + e++ + ++f + a + b + c + d + e + f);



a=25;
b=20;
c=30;
console.log((a>b)?false:true);
console.log(c = a-- + --b + c-- + --c + ++a + --a + b-- + ++b - a++ - --a);
