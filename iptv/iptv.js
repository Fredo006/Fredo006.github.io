// root element
const grid = document.querySelector(".grid");

class IPTV {
    constructor(tvName, url, htmlElement) {
        this.tvName = tvName;
        this.url = url;
        this.htmlElement = htmlElement;
    }
}

function generateIPTVCard(name, url) {
    const playerCard = document.createElement('div');
    playerCard.className = "player-card";

    const video = document.createElement('video');
    video.className = "video-js vjs-default-skin";
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

    return playerCard;
}

let arrayOfIPTV = [];

iptv_list.forEach((iptv) => {
    arrayOfIPTV.push(
        new IPTV(iptv.name, iptv.url, generateIPTVCard(iptv.name, iptv.url))
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