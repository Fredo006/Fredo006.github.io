
/*
    HANDLE GCD CALCULATION OR GREATEST COMMON DIVISOR

    in indonesian => FPB (Faktor Persekutuan Terbesar)
*/

/*
    Function to calculate GCD

    Parameter position of m and n doesn't matter
    return int OR kind of number format
*/
function euclidGCD(m, n){
    let temp = 0;

    while(n != 0){
        temp = m % n;
        m = n;
        n = temp;
    }

    return m;
}