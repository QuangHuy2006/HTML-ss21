for(let i=0;i<n;i++){
    for(let j=n-i-1;j>0;j--){
        document.write(`&ensp;`);
    }
    for(let k=0;k<=i;k++){
        document.write("*");
    }
    document.write("<br>");
}