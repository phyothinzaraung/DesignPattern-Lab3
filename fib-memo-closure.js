
const fib = (function () {
    let cache = new Map();

    return {
        fibonacci1: function (n) {
            if (cache.has(n)) {
                return cache.get(n);
            } else {
                if (n == 0 || n == 1) {
                    cache.set(n, n);
                    return n;
                } 
                let temp = fibonacci1(n - 1) + fibonacci1(n - 2);
                cache.set(n, temp);
                return temp;
            }
        }
    };
})();



let label2 = "fibonacci closure";
console.time(label2);
console.log(fib.fibonacci1(10));
console.timeEnd(label2);