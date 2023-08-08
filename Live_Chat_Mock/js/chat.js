
//Get data from logged in user and store it to constant value
const loggedName = window.localStorage.getItem("user_logged_in");
const id_user_logged_in = window.localStorage.getItem("id_user");
const linkAPI = window.localStorage.getItem("link_api");


// const ws = new WebSocket(`${linkAPI}/api/ws-chat/${id_user_logged_in}`);

//API Functions
const getChat = async () => {
    try {
        const res = await fetch(`${linkAPI}api/get-data/`, {
            method: "GET",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            })
        })

        const output = await res.json();

        console.log(output);
    }catch(error){
        console.log(error);
    }
}

const sendChat = async (chat, date) => {
    try {

        chat_object = {
            "id_user": id_user_logged_in,
            "chat_data": chat,
            "date": date
        }

        const res = await fetch(`${linkAPI}api/send-chat/`, {
            method: "POST",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(chat_object)
        })

        const output = await res.json();

        console.log(output);

    }catch(error){
        console.log(error);
    }
}



let welcomeTitle = document.getElementById('welcome-title');

welcomeTitle.innerHTML = "Welcome " + loggedName;

const form = document.querySelector('form');
let messageInput = document.getElementById('message-input');
let sendBtn = document.getElementById('send-btn');
let chatsContainer = document.querySelector('.chats-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    let dateTimeNow = getTimeDate();
    
    console.log(dateTimeNow);
    console.log(messageInput.value);

    ws.send(messageInput.value);
    sendChat(messageInput.value, dateTimeNow);

    messageInput.value = "";
});

sendBtn.addEventListener('click', (e) => {
    e.preventDefault();

    
    let dateTimeNow = getTimeDate();
    
    console.log(dateTimeNow);
    console.log(messageInput.value);

    appendMessage(messageInput.value, dateTimeNow);

    sendChat(messageInput.value, dateTimeNow);

    messageInput.value = "";
});


function getTimeDate(){
    let today = new Date();

    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    let minutes = formatMinutes(today);

    let seconds = formatSeconds(today);

    let date = today.getDate()+'-'+(months[today.getMonth()])+'-'+today.getFullYear();
    let time = today.getHours() + ":" + minutes + ":" + seconds;
    let dateTime = date+' | '+time;

    return dateTime;
}

function formatMinutes(today){
    if(today.getMinutes() < 10){
        return '0' + today.getMinutes();
    } else {
        return today.getMinutes();
    }
}

function formatSeconds(today){
    if(today.getSeconds() < 10){
        return '0' + today.getSeconds();
    } else {
        return today.getSeconds();
    }
}

function appendMessage(chat, dateTime){
    let messageChat = document.createElement('div');
    messageChat.className = 'chat';

    let h3 = document.createElement('h3');
    h3.innerHTML = loggedName;

    messageChat.appendChild(h3);

    let pMessage = document.createElement('p');
    pMessage.innerHTML = chat;

    messageChat.appendChild(pMessage);

    let pDate = document.createElement('p');
    pDate.className = 'opacity-50';
    pDate.style.textAlign = 'right';
    pDate.innerHTML = dateTime;

    messageChat.appendChild(pDate);

    chatsContainer.appendChild(messageChat);
    chatsContainer.scrollTop = chatsContainer.scrollHeight;
}


// function update(){
//     $.ajax({
//         url: `${linkAPI}api/get-data/`,
//         method: "GET",
//         success: function(response){
//             console.log(response);
//         }
//     }).then(() => {
//         setTimeout(() => {
//             update();
//         }, 1000);
//     })
// }

// update();


// (function update() {
//     $.ajax({
//         url: `${linkAPI}api/get-data/`,
//         method: "GET",
//         datatype: "json",
//         contentType: "application/json",
//         success: function(response){
//             console.log(response);
//         }
//     }).then(function() {          
//        setTimeout(update, 3000); 
//     });
// })(); 