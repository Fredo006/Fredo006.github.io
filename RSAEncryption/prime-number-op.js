
/*
    HANDLE PRIME NUMBERS OPERATION
*/

/*
    Function to check is the number from the parameter is a prime number or not

    Parameter data type: int or kind of number format
    return boolean
*/
function isPrime(number){
    if(number < 2){
        return false;
    }

    for(let i = 2; i<(number/2) + 1; i++){
        if(number % i === 0){
            return false;
        }
    }

    return true;
}


/*
    Function to generate random prime number in range between MIN and MAX

    Parameter data type: int or kind of number format
    return int OR kind of number format
*/
function generate_prime(min, max){
    let primeNumber = Math.floor(Math.random() * max) + min;

    while(!isPrime(primeNumber)){
        primeNumber = Math.floor(Math.random() * max) + min;
    }

    return primeNumber;
}

