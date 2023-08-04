
const input_link = document.getElementById('input-link');
const download_btn = document.getElementById('download-btn');
const download_button_real = document.getElementById('download');
const notif_mengambil = document.getElementById('notif-mengambil');

input_link.addEventListener('input', () => {
    let input = input_link.value;
    if(input.includes("https://www.instagram.com")){
        notif_mengambil.classList.toggle('hide');
        download(input);
    } else {
        download_button_real.classList.remove('btn-secondary');
        download_button_real.classList.add('btn-primary');
        download_button_real.classList.remove('disabled');
    }
});

download_btn.addEventListener('click', () => {

    setTimeout(() => {
        input_link.value = "";
        download_btn.href = "";
        download_button_real.classList.remove('btn-primary');
        download_button_real.classList.add('btn-secondary');
        download_button_real.classList.add('disabled');
    }, 5000);
    
});

function download(link){
    fetch(`https://api.akuari.my.id/downloader/igdl2?link=${link}`)
    .then(res => res.json())
    .then(data => {
        download_btn.href = data.respon[1].url;

        notif_mengambil.classList.toggle('hide');
        download_button_real.classList.remove('btn-secondary');
        download_button_real.classList.add('btn-primary');
        download_button_real.classList.remove('disabled');
    });
}

