let armstrong2 = prompt("nhap so co 3 chu so: ")
let armstrong = Number(armstrong2);
let remain = 0;
for(let i=0;i<armstrong2.length; i++){
    remain += armstrong2[i]**3;
}
if(remain == armstrong){
   alert(`${armstrong} la so armstrong`); 
}else{
    alert(`${armstrong} khong la so armstrong`);
}
