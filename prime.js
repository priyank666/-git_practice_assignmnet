function checkPrime(num){
    let factors = 0;
    for(let i=1; i<=num; i++){
        if(num % i){
            factors++;
        }
    }
    if(factors) {
        return true;
    }
    return false;
}

let ans = checkPrime(13);

if(ans ==  true){
    console.log("Prime");
} else {
    console.log("Not Prime");
}