
// ENCRYPTION SIDE ==============================================================================================
/*
    Function to encrypt data/text data
*/
function encrypt_data(public_key, N_value, text){

    let encrypted = []; // for debugging only

    for(let i = 0; i<text.length; i++){
        encrypted.push(power_of(text.charCodeAt(i), public_key) % N_value + '|');
    }

    return encrypted;
}


// DECRYPTION SIDE ==============================================================================================
/*
    Function to parse encrypted data

    return array of int OR kind of array of number format
*/
function parse_encrypted_data(encrypted_data){
    let encrypted_data_array = [];
    let buffer = [];

    for(let i = 0; i<encrypted_data.length; i++){
        if(encrypted_data.charAt(i) != '|'){
            buffer.push(encrypted_data.charAt(i));
        } else {
            let bufferStr = buffer.join('');
            
            if(bufferStr.charAt(0) == ','){
                encrypted_data_array.push(
                    parseInt(bufferStr.slice(1).concat('n')) // using BigInt format
                );
            } else {
                encrypted_data_array.push(
                    parseInt(bufferStr.concat('n')) // using BigInt format
                );
            }

            buffer = [];
        }
    }

    return encrypted_data_array;
}

/*
    Function to decrypt data/text data

    return array of decoded characters
*/
function decrypt_data(encrypted_data, private_key, N_value){
    let parsed_encrypted_data = [];
    let decrypted_data = [];
    parsed_encrypted_data = parse_encrypted_data(encrypted_data);

    parsed_encrypted_data.forEach(data => {
        let result_decrypted = power_of_BigInt(BigInt(data), BigInt(private_key)) % BigInt(N_value);

        let final_result_decrypted = Number(result_decrypted);
        decrypted_data.push(String.fromCharCode(final_result_decrypted));
    })

    return decrypted_data;
}


// let text = "Halo bro apa kabar anjay";
// let result_encrypt = [];

// result_encrypt = encrypt_data(publicKey, n, text);

// console.log(result_encrypt.join(''));

// decrypt_data(result_encrypt.join(''), privateKey, n);