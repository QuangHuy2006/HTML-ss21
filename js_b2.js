let num1 = Number(prompt("nhap so thu nhat: "));
let num2 = Number(prompt("nhap so thu hai: "));
let num3 = Number(prompt("nhap so thu ba: "));
let num4 = Number(prompt("nhap so thu tu: "));
let num5 = Number(prompt("nhap so thu nam: "));
let cnteven = 0;
let cntodd = 0;
if(num1 % 2 !=0){
    cntodd++;
}else{
    cnteven++;
}
if(num2 % 2 !=0){
    cntodd++;
}else{
    cnteven++;
}
if(num3 % 2 !=0){
    cntodd++;
}else{
    cnteven++;
}
if(num4 % 2 !=0){
    cntodd++;
}else{
    cnteven++;
}
if(num5 % 2 !=0){
    cntodd++;
}else{
    cnteven++;
}
alert(`so luong so le la: ${cntodd}, so luong so chan la: ${cnteven}`);