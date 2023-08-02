
/*
    HANDLE GENERATION OF PUBLIC KEY AND PRIVATE KEY
*/

/* 
    Function to generate public key
    return int OR kind of number format

    Error code flag -1
*/
function generate_public_key(x_of_n){
    for(let i = 3; i<x_of_n; i++){
        if(euclidGCD(i, x_of_n) === 1){
            return i;
        }
    }

    return -1;
}


/*
    Function to generate private key
    return int OR kind of number format

    Error code flag -1
*/ 
function generate_private_key(x_of_n, public_key){
    for(let pk = 3; pk<=x_of_n; pk++){
        if((public_key * pk) % x_of_n === 1){
            return pk;
        }
    }

    return -1;
}


/*
    Function to find x_of_n function in math concept
    return int OR kind of number format

    Error code flag -1
*/
function find_x_of_n(p, q){
    return (p - 1) * (q - 1);
}


let p = generate_prime(100, 200);
let q = generate_prime(100, 200);

while(p===q){
    q = generate_prime(100, 200);
}

n = p * q;

// console.log('P: ' + p);
// console.log('Q: ' + q);
// console.log('P * Q: ' + n);

let x_of_n = find_x_of_n(p, q);

// console.log('x_of_n: ' + x_of_n);

// let publicKey = generate_public_key(x_of_n);
// let privateKey = generate_private_key(x_of_n, publicKey);

// console.log('Public Key: ' + publicKey);
// console.log('Private Key: ' + privateKey);