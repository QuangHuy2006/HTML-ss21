for(let i=n-1;i>=0;i--){
    for(let j=0;j<n-i-1;j++){
        document.write(`&ensp;`);
    }
    for(let k=i;k>=0;k--){
        document.write("*");
    }
    document.write("<br>");
}