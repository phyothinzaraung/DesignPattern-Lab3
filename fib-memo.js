let cache = new Map();

function fibonacci(n){
    if(cache.has(n)){
        return cache.get(n);
    }else{
        let temp;
        if(n==0 || n==1){
            temp = n;
        }else{
            temp = fibonacci(n-1) + fibonacci(n-2);
        }
        cache.set(n, temp);
        return temp;
    }
}

let label = "fibonacci";
console.time(label);
console.log(fibonacci(10));
console.timeEnd(label);