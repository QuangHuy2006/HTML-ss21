let num = Number(prompt("nhap so bat ky: "));
for(let i=0; i< num; i++){
    if(num % i == 0){
        alert(`cac uoc cua ${num} la: ${i}`);
    }
}