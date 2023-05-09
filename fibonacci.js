function fibonacci(n){
    if(n==0 || n==1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

let label1 = "recursive fibonacci";
console.time(label1);
console.log(fibonacci(10))
console.timeEnd(label1);