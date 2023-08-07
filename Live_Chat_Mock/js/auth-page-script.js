let modalWrapper = document.getElementById('modal-wrapper');

window.onload = function(event){
    modalWrapper.style.display = 'block';
    modalWrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.327)';
};

let promptTunggu = document.getElementById('prompt-tunggu');
let connectBtn = document.getElementById('connect-btn');
let cancelBtn = document.getElementById('cancel-btn');

let linkAPI = document.getElementById('link-api-input');

const verifyAPI = async (linkAPI) => {

    try{

        if(!promptTunggu.classList.contains('show')){
            promptTunggu.classList.add('show');
        }
        promptTunggu.innerText = "Mohon tunggu, sedang mengkoneksikan....";
        promptTunggu.style.color = 'blue';

        const res = await fetch(`${linkAPI}api/`, {
            method: "GET",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            })
        });
    
        const output = await res.json();
        console.log(output.response);

        if(output.response === 'HI THERE!! Chat server response! Go ahead! Roger..'){
            if(!promptTunggu.classList.contains('show')){
                promptTunggu.classList.add('show');
            }
    
            promptTunggu.innerHTML = "Berhasil Terhubung ke Server API<br><br>Redirect ke halaman login dalam 5 detik....";
            promptTunggu.style.color = 'green';

            window.localStorage.setItem("link_api", linkAPI);

            setTimeout(() => {
                window.location.href = 'login.html';
            }, 5000);
        } else {
            if(!promptTunggu.classList.contains('show')){
                promptTunggu.classList.add('show');
            }
    
            promptTunggu.innerText = "Koneksi sampai ke server API, tapi route tidak ditemukan (404 Not Found)";
            promptTunggu.style.color = 'red';
        }

    }catch(error){
        console.log(error);

        if(!promptTunggu.classList.contains('show')){
            promptTunggu.classList.add('show');
        }

        promptTunggu.innerText = "Tidak dapat terhubung ke API server";
        promptTunggu.style.color = 'red';
    }
    
}


connectBtn.addEventListener('click', () => {
    let inputLink = linkAPI.value;

    if(inputLink != ''){

        if(!inputLink.includes('https://')){
            
            if(!promptTunggu.classList.contains('show')){
                promptTunggu.classList.add('show');
            }

            promptTunggu.innerText = "Invalid Link!";
            promptTunggu.style.color = 'red';
        } else {
            verifyAPI(inputLink);
        }
    } else {

        promptTunggu.classList.add('show');
        promptTunggu.innerText = "Invalid Input!";
        promptTunggu.style.color = 'red';
    }
})