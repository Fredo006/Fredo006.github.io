
// WORKING WITH PUBLIC KEY AND N VALUE GENERATION ===============================================
let public_key_field = document.getElementById('public-key-field');
let n_value_field = document.getElementById('n-value-field');

let publicKey = generate_public_key(x_of_n);
let n_value = n;
let privateKey = generate_private_key(x_of_n, publicKey);

public_key_field.innerText = 'Public key : ' + publicKey;
n_value_field.innerText = 'N value : ' + n;


let copy_btn = document.getElementById('copy-public-btn');

copy_btn.addEventListener('click', () => {
    let constructCopyText = public_key_field.innerText + '\n' + n_value_field.innerText;

    console.log(constructCopyText);

    navigator.clipboard.writeText(constructCopyText);

    copy_btn.innerText = 'Copied to clipborad';
});

//WORKING WITH ENCRYPT DECRYPT MECHANISM =========================================================
let textEncrypt = document.querySelector('#text-to-encrypt');
let textDecrypt = document.querySelector('#data-to-decrypt');
let textEncryptResult = document.getElementById('encrypt-result');
let textDecryptResult = document.getElementById('decrypt-result');

let publicKeyInput = document.querySelector('#public-key-input');
let n_valueInput = document.querySelector('#n-value-input');

let encryptBtn = document.querySelector('#encrypt-btn');
let decryptBtn = document.querySelector('#decrypt-btn');
let decryptProgress = document.querySelector('.decrypt-btn-container p');

let copyEncryptBtn = document.getElementById('copy-encrypt-btn');
let copyDecryptBtn = document.getElementById('copy-decrypt-btn');

//Encrypt side
encryptBtn.addEventListener('click', () => {
    let textToEncrypt = textEncrypt.value;
    let publicKeyInputValue = publicKeyInput.value;
    let n_valueInputValue = n_valueInput.value;

    console.log('Public key input: ' + publicKeyInputValue);
    console.log('N Value Input: ' + n_valueInputValue);

    if(textToEncrypt != '' && publicKeyInputValue != '' && n_valueInputValue != ''){
        let encrypted = encrypt_data(publicKeyInputValue, n_valueInputValue, textToEncrypt);
        textEncryptResult.value = encrypted.join('');
    }
});

copyEncryptBtn.addEventListener('click', () => {

    if(textEncryptResult.value != ''){
       navigator.clipboard.writeText(textEncryptResult.value);
       copyEncryptBtn.innerText = 'Hasil Enkripsi disalin!';

       setTimeout(() => {
        copyEncryptBtn.innerText = 'Salin hasil enkripsi';
       }, 5000);
    }
});

//Decrypt side
decryptBtn.addEventListener('click', () => {
    let dataToDecrypt = textDecrypt.value;
    if(dataToDecrypt != ''){
        let decrypted = decrypt_data(dataToDecrypt, privateKey, n_value);
        textDecryptResult.value = decrypted.join('');
    }
});

copyDecryptBtn.addEventListener('click', () => {

    if(textDecryptResult.value != ''){
        navigator.clipboard.writeText(textDecryptResult.value);
        copyDecryptBtn.innerText = 'Hasil Dekripsi disalin!';

        setTimeout(() => {
            copyDecryptBtn.innerText = 'Salin hasil dekirpsi';
        }, 5000);
    }
});

// WORKING WITH POP UP MODAL =====================================================================
let modalWrapperPopUp = document.getElementById('modal-wrapper');

window.onload = function(event){
    modalWrapperPopUp.style.display = 'block';
    modalWrapperPopUp.style.backgroundColor = 'rgba(0, 0, 0, 0.327)';
};


let modalWrapperConfirm = document.getElementById('modal-wrapper-confirmation');

window.addEventListener('beforeunload', (e) => {
    e = e || window.event;

    if(e) {
        e.returnValue = '';
        e.preventDefault();
        modalWrapperConfirm.style.display = 'block';
        modalWrapperConfirm.style.backgroundColor = 'rgba(0, 0, 0, 0.327)';
    }
});

let close_btn_popup = document.getElementById('close-btn-modal');

close_btn_popup.addEventListener('click', () => {
    modalWrapperPopUp.style = '';
});

let cancel_btn_confirm = document.getElementById('cancel-btn-modal');

cancel_btn_confirm.addEventListener('click', () => {
    modalWrapperConfirm.style = '';
});

let continue_refresh = document.getElementById('continue-refresh-btn');

continue_refresh.addEventListener('click', () => {
    location.reload();
});