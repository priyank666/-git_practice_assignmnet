function checkPrime(num){
    
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

checkPrime(13);

