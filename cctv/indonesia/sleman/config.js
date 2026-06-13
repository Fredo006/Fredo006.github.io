const grid = document.querySelector('.grid');

function getRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}


class CCTVSleman {
    constructor(title, link, htmlElement) {
        this.title = title;
        this.link = link;
        this.htmlElement = htmlElement;
    }
}


function generateCCTVJogjaCard(title, link, id) {
    const videoCard = document.createElement('div');
    videoCard.className = "video-card";

    const video = document.createElement('video');
    video.controls = true;
    video.preload = "auto";
    video.className = "video-js vjs-default-skin";
    video.id = id;
    
    const source = document.createElement('source');
    source.src = link;
    source.type = "application/x-mpegURL";
    video.appendChild(source);
    videoCard.appendChild(video);

    const videoInfo = document.createElement('div');
    videoInfo.className = "video-info";

    const videoDot = document.createElement('div');
    videoInfo.appendChild(videoDot);

    const videoTitle = document.createElement('div');
    videoTitle.className = "video-title";
    videoTitle.innerText = title;
    videoInfo.appendChild(videoTitle);
    videoCard.appendChild(videoInfo);

    grid.appendChild(videoCard);

    // Video JS
    const constructedVideoJS = videojs(id);
    const sourceForVideoJS = {
        src: link,
        type: "application/x-mpegURL"
    }

    // trigger video js
    constructedVideoJS.src(sourceForVideoJS);

    return videoCard;
}

let arrayOfCCTVSleman = [];

list_cctv_sleman.forEach((cctv) => {
    arrayOfCCTVSleman.push(
        new CCTVSleman(
            cctv.title,
            cctv.link,
            generateCCTVJogjaCard(cctv.title, cctv.link, getRandomString(4))
        )
    )
});

const searchInput = document.querySelector('.search');

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();
    arrayOfCCTVSleman.forEach(cctv => {
        // console.log(iptv);
        const isFound = cctv.title.toLowerCase().includes(value);
        cctv.htmlElement.classList.toggle('hide', !isFound);
    })
})

const sectionCountLabel = document.querySelector('.section-label');
sectionCountLabel.innerText = `${list_cctv_sleman.length} active ${list_cctv_sleman.length > 1 ? 'cameras' : 'camera'}`;


// // constructor Video JS
// const videoDepanStasiunTugu = videojs('depan_stasiun_tugu');
// const videoDepanMallMalioboro_utara = videojs('depan_mall_malioboro');
// const videoDepanOpticTuguMalioboro = videojs('depan_optic_tugu_malioboro');
// const videoSungaiNgentakKaptenHaryadi = videojs('sungai_ngentak_kapten_haryadi');
// const videoDepanGaleria = videojs('depan_galeria');
// const videoSimpangDemangan_timur = videojs('simpang_demangan_hadap_timur');
// const videoSimpangJokteng_timur = videojs('simpang_jokteng');

// // source video link config for Video JS
// const sourceDepanStasiunTugu = {
//     src: "https://cctvjss.jogjakota.go.id/margo-utomo/Wisma-Ratih.stream/playlist.m3u8",
//     type: 'application/x-mpegURL'
// };

// const sourceDepanMallMalioboro_utara = {
//     src: "https://cctvjss.jogjakota.go.id/malioboro/Malioboro_6_Mall_Utara.stream/playlist.m3u8",
//     type: 'application/x-mpegURL'
// };

// const sourceDepanOpticTuguMalioboro = {
//     src: "https://cctvjss.jogjakota.go.id/margo-utomo/Optic-Tugu.stream/playlist.m3u8",
//     type: 'application/x-mpegURL'
// };

// const sourceSungaiNgentakKaptenHaryadi = {
//     src: "https://cctvjss.jogjakota.go.id/bpbd/BPBD_ngentak.stream/playlist.m3u8",
//     type: 'application/x-mpegURL'
// };

// const sourceDepanGaleria = {
//     src: "https://cctvjss.jogjakota.go.id/atcs/ATCS_Simpang_Galeria_TimurSelatan.stream/playlist.m3u8",
//     type: 'application/x-mpegURL'
// };

// const sourceSimpangDemangan_timur = {
//     src: "https://cctvjss.jogjakota.go.id/atcs/ATCS_Simpang_Demangan_View_Timur.stream/playlist.m3u8",
//     type: 'application/x-mpegURL'
// };

// const sourceSimpangJokteng_timur = {
//     src: "https://cctvjss.jogjakota.go.id/atcs/ATCS_joktengwetan.stream/playlist.m3u8",
//     type: 'application/x-mpegURL'
// }


// // trigger source
// videoDepanStasiunTugu.src(sourceDepanStasiunTugu);
// videoDepanMallMalioboro_utara.src(sourceDepanMallMalioboro_utara);
// videoDepanOpticTuguMalioboro.src(sourceDepanOpticTuguMalioboro);
// videoSungaiNgentakKaptenHaryadi.src(sourceSungaiNgentakKaptenHaryadi);
// videoDepanGaleria.src(sourceDepanGaleria);
// videoSimpangDemangan_timur.src(sourceSimpangDemangan_timur);
// videoSimpangJokteng_timur.src(sourceSimpangJokteng_timur);