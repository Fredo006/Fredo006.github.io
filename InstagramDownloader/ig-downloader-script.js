
const input_link = document.getElementById('input-link');

input_link.addEventListener('input', () => {
    let input = input_link.value;
    if(input.includes("https://www.instagram.com")){
        download(input);
    }
});

function download(link){
    fetch(`https://api.akuari.my.id/downloader/igdl?link=${link}`)
    .then(res => res.json())
    .then(data => {
        window.location.href = data.respon[0];
    });
}

