
const linkAPI = window.localStorage.getItem("link_api");


const searchData = async (username, password, dateTimeNow) => {

    try {
        const res = await fetch(`${linkAPI}api/login/${username}+${password}+${dateTimeNow}`,{
            method: "GET",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
        });

        const output = await res.json();

        if(output.message === "Login OK"){
            //insert to database
            if(notif.classList.contains('hide')){
                notif.classList.toggle('hide');
            }

            notif.innerHTML = "";

            console.log("LOGIN BERHASIL!");

            notif.innerHTML = "Succesfully logged in, redirect in 3 seconds...";
            notif.classList.remove('text-bg-danger');
            notif.classList.add('text-bg-success');

            window.localStorage.setItem("user_logged_in", output.user);
            window.localStorage.setItem("id_user", output.id_user);

            setTimeout(() => {
                window.location.href = "chat.html";
            }, 3000);
        } else {
            if(notif.classList.contains('hide')){
                notif.classList.toggle('hide');
            }
            
            notif.innerHTML = output.message;
        }
    }catch(error){
        console.log(error);
    }
}

let loginBtn = document.getElementById('login-btn');

let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');

let notif = document.getElementById('error_handling');

loginBtn.addEventListener('click', () => {
    let username = usernameInput.value;
    let password = passwordInput.value;
    let dateTimeNow = getTimeDate();

    searchData(username, password, dateTimeNow);
});

passwordInput.addEventListener('keyup', (event) => {
    let username = usernameInput.value;
    let password = passwordInput.value;
    let dateTimeNow = getTimeDate();

    if(event.key === "Enter"){
        searchData(username, password, dateTimeNow);
    }
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