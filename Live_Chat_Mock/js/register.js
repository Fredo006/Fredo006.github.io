
const linkAPI = window.localStorage.getItem("link_api");

const sendData = async (name, username, password) => {

    data_object = {
        "name": name,
        "username": username,
        "password": password
    }

    try {
        const res = await fetch(`${linkAPI}api/send-data/`,{
            method: "POST",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(data_object)
        });

        const output = await res.json();

        console.log(output);

        window.location.href = "login.html";
    }catch(error){
        console.log(error);
    }
}


const getData = async () => {


    try {
        const res = await fetch(`${linkAPI}api/get-data/`,{
            method: "POST",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
                "Content-Type": "application/json"
            }),
        });

        const output = await res.json();

        console.log(output.data);
    }catch(error){
        console.log(error);
    }
}


const searchData = async (name ,username, password) => {

    try {
        const res = await fetch(`${linkAPI}api/search-data/${name}+${username}+${password}`,{
            method: "GET",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
        });

        const output = await res.json();

        console.log(output.message);

        if(output.message === "OK"){
            //insert to database
            notif.innerHTML = "";

            sendData(name, username, password);
        } else {
            notif.innerHTML = output.message;
        }
    }catch(error){
        console.log(error);
    }
}

let registerBtn = document.getElementById('register-btn');

let nameInput = document.getElementById('name');
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');

let notif = document.getElementById('notif');

registerBtn.addEventListener('click', () => {
    let username = usernameInput.value;
    let name = nameInput.value;
    let password = passwordInput.value;

    searchData(name, username, password);
});