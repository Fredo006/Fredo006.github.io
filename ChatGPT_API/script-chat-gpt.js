
function getVoices() {
    let voices = speechSynthesis.getVoices();
    if(!voices.length){
        // some time the voice will not be initialized so we can call spaek with empty string
        // this will initialize the voices 
        let utterance = new SpeechSynthesisUtterance("");
        speechSynthesis.speak(utterance);
        voices = speechSynthesis.getVoices();
    }
    return voices;
}


function speak(text, voice, rate, pitch, volume) {
    // create a SpeechSynthesisUtterance to configure the how text to be spoken 
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = volume; // From 0 to 1
    speakData.rate = rate; // From 0.1 to 10
    speakData.pitch = pitch; // From 0 to 2
    speakData.text = text;
    speakData.lang = 'id';
    speakData.voice = voice;

    // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
    speechSynthesis.speak(speakData);
}

let messagesLog = [];
let counterIDIconPlay = 0;

const responseContainer = document.querySelector('.response-container');
const inputText = document.querySelector('.input-text');
const wait = document.querySelector('.wait');

function appendResponse(response, from){
    let message = document.createElement('div');
    message.className = 'message-content';

    let h4From = document.createElement('h4');
    h4From.innerText = from + ':';
    message.appendChild(h4From);

    let hr = document.createElement('hr');
    message.appendChild(hr);

    let pMessage = document.createElement('p');
    pMessage.innerText = response;
    message.appendChild(pMessage);

    let iconPlay = document.createElement('i');
    iconPlay.className = 'bi bi-play';
    iconPlay.id = counterIDIconPlay;
    iconPlay.style.fontSize = '1.5rem';
    iconPlay.style.cursor = 'pointer';

    iconPlay.addEventListener('click', (event) => {
        if ('speechSynthesis' in window) {
            let rate = 1, pitch = 2, volume = 1;
            let text = messagesLog[event.target.id];
        
            speak(text, voices[5], rate, pitch, volume);
        }else{
            console.log(' Speech Synthesis Not Supported 😞'); 
        }
    });

    message.appendChild(iconPlay);

    counterIDIconPlay++;

    return message;
}

let voices = getVoices();

inputText.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        let inputQuery = e.target.value;

        inputText.value = "";

        wait.classList.toggle('hide');
        responseContainer.appendChild(appendResponse(inputQuery, 'You'));
        responseContainer.scrollTop = responseContainer.scrollHeight;
        messagesLog.push(inputQuery);

        fetch(`https://api.akuari.my.id/ai/gpt?chat=${inputQuery}`).then(res => res.json()).then(message => {
            responseContainer.appendChild(appendResponse(message.respon, 'Chat GPT'));
            wait.classList.toggle('hide');
            messagesLog.push(message.respon);
            responseContainer.scrollTop = responseContainer.scrollHeight;
        });
    }
});
