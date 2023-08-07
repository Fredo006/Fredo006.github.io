
const linkAPI = window.localStorage.getItem("link_api");


const searchData = async (username, password) => {

    try {
        const res = await fetch(`${linkAPI}api/login/${username}+${password}`,{
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

    searchData(username, password);
});