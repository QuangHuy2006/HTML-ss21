let num = Number(prompt("nhap 1 so bat ky"));
let check =0;
if(num<2){
    check =0;
}
if(num == 2){
    check = 1;
}else{
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i == 0){
            check =0;
            break;
        }else{
            check =1;
            continue;
        }
    }
}
if(check){
    alert(`${num} la so nguyen to`);
}else{
    alert(`${num} khong la so nguyen to`);
}