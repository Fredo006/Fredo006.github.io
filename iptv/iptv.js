// root element
const grid = document.querySelector(".grid");

function getRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

class IPTV {
    constructor(tvName, url, htmlElement) {
        this.tvName = tvName;
        this.url = url;
        this.htmlElement = htmlElement;
    }
}

function generateIPTVCard(name, url, id) {
    const playerCard = document.createElement('div');
    playerCard.className = "player-card";

    const video = document.createElement('video');
    video.className = "video-js vjs-default-skin";
    video.id = id;
    video.controls = true;
    video.preload = 'auto';
    const source = document.createElement('source');
    source.src = url;
    source.type = "application/x-mpegURL";
    video.appendChild(source);

    const playerFooter = document.createElement('div');
    playerFooter.className = "player-footer";
    const nowPlaying = document.createElement('div');
    nowPlaying.className = "now-playing";
    const nowPlayingName = document.createElement('div');
    nowPlayingName.className = "now-playing-name";
    nowPlayingName.innerText = name;
    nowPlaying.appendChild(nowPlayingName);
    playerFooter.appendChild(nowPlaying);

    playerCard.appendChild(video);
    playerCard.appendChild(playerFooter);

    grid.appendChild(playerCard);

    // Video JS
    const constructedVideoJS = videojs(id);
    const sourceForVideoJS = {
        src: url,
        type: "application/x-mpegURL"
    }

    // trigger video js
    constructedVideoJS.src(sourceForVideoJS);

    return playerCard;
}

let arrayOfIPTV = [];

iptv_list.forEach((iptv) => {
    arrayOfIPTV.push(
        new IPTV(iptv.name, iptv.url, generateIPTVCard(iptv.name, iptv.url, getRandomString(4)))
    )
});

const searchInput = document.querySelector('.search');

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();
    arrayOfIPTV.forEach(iptv => {
        // console.log(iptv);
        const isFound = iptv.tvName.toLowerCase().includes(value);
        iptv.htmlElement.classList.toggle('hide', !isFound);
    })
})