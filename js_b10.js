let check = 1;
let j=2;
let cnt=0;
while(cnt < 10){
    check=1;
    for(let i=2; i<=Math.sqrt(j); i++){
        if(j % i == 0){
            check =0;
            break;
        }
    }
    if(check){
        cnt++;
        document.write(`${j} la so nguyen to`+ "<br>");
    }
    j++;
}