
let n = prompt("Please enter any number!")
let factorial = 1;

for(let i = 2; i <= n ; i++){
    factorial = factorial*i;
}

console.log("factorial of", n, ":", factorial);