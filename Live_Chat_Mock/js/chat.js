
//Get data from logged in user and store it to constant value
const loggedName = window.localStorage.getItem("user_logged_in");
const id_user_logged_in = window.localStorage.getItem("id_user");
const linkAPI = window.localStorage.getItem("link_api");


//API Function
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

    let date = today.getDate()+'-'+(months[today.getMonth()])+'-'+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' | '+time;

    return dateTime;
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
}