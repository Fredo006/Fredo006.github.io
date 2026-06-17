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

let arrayOfCCTV = [];

list_cctv_bandung.forEach((cctv) => {
    arrayOfCCTV.push(
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
    arrayOfCCTV.forEach(cctv => {
        // console.log(iptv);
        const isFound = cctv.title.toLowerCase().includes(value);
        cctv.htmlElement.classList.toggle('hide', !isFound);
    })
})

const sectionCountLabel = document.querySelector('.section-label');
sectionCountLabel.innerText = `${list_cctv_bandung.length} active ${list_cctv_bandung.length > 1 ? 'cameras' : 'camera'}`;