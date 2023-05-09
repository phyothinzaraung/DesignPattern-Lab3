const fib = (function(){
    let cache = new Map();

    function fibonacci(n){
        if(cache.has(n)){
            return cache.get(n);
        }else{
            if(n <= 1){
                cache.set(n, n);
                return n;
            }
            let temp = fibonacci(n - 1) + fibonacci(n - 2);
            cache.set(n, temp);
            return temp;
        }
    }

    return{fibonacci: fibonacci};
})();

let label = "fibonacci";
console.time(label);
console.log(fib.fibonacci(10));
console.timeEnd(label);