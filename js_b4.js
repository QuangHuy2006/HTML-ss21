let a = Number(prompt("nhap so a: "));
let b = Number(prompt("nhap so b: "));
let c = Number(prompt("nhap so c: "));
let delta = 0;
let x1 = 0;
let x2 = 0;
let xkep = 0;
if(a != 0){
    delta = b**2 - 4*a*c;
    if(delta > 0){
        x1=-b + Math.sqrt(delta)/2*a;
        x2=-b - Math.sqrt(delta)/2*a;
        alert(`hai nghiem cua pt la x1 = ${x1}, x2 = ${x2}`);
    }else if(delta = 0){
        xkep = -b/ 2*a;
        alert(`pt co nghiem kep la: ${xkep}`);
    }else{
        alert("phuong trinh vo nghiem !");
    }
}