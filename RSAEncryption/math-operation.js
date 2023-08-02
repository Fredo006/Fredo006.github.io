
/*
    CONTAINS ANY MATHEMATICAL OPERATION
*/

/*
    Function to get the power of something (number) to the certain value at the 'power' parameter

    Parameter data type: int OR kind of number format
    return int OR kind of number format
*/
function power_of(number, power){
    let result = 1;
    for(; power>0; power--){
        result = result * number;
    }

    return result;
}


function power_of_BigInt(number, power){
    let result = 1n;
    for(; power>0; power--){
        result = result * number;
    }

    return result;
}