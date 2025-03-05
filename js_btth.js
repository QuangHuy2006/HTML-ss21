let n = Number(prompt("nhap so nguyen duong bat ky: "));
if(n >0){
for(let i=n-1;i>=0;i--){
    for(let j=i;j>=0;j--){
        document.write("*");
    }
    document.write("<br>");
}
}else{
    alert("so khong hop le !");
}