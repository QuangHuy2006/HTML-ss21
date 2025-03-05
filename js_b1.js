let num1 = Number(prompt("nhap so thu nhat: "));
let num2 = Number(prompt("nhap so thu hai: "));
let num3 = Number(prompt("nhap so thu ba: "));
let num4 = Number(prompt("nhap so thu tu: "));
let num5 = Number(prompt("nhap so thu nam: "));
let sum = 0;
if(num1 % 2 !=0){
    sum +=num1;
}
if(num2 % 2 !=0){
    sum +=num2;
}
if(num3 % 2 !=0){
    sum +=num3;
}
if(num4 % 2 !=0){
    sum +=num4;
}
if(num5 % 2 !=0){
    sum +=num5;
}
alert(`tong cac so le = ${sum}`);