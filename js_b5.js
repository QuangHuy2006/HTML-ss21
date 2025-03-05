for(let i=0;i <=100;i++){ 
    if(i % 3 == 0 && i % 5 == 0){
        document.write(`FizzBuzz ${i} la boi so cua ca 3 va 5`);
    }else{
        if(i % 3 == 0){
            document.write(`Fizz ${i} la boi so cua 3`);
        }
        if(i % 5 == 0){
            document.write(`Buzz ${i} la boi so cua 5`);
        }
    }
}