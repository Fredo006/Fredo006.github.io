let sky = document.getElementById('sky');
let mountains = document.getElementById('mountains');
let land = document.getElementById('land');
let moon = document.getElementById('moon');
let greetings = document.getElementById('greetings');

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;

    sky.style.top = value * -0.2 + 'px';
    moon.style.top = value * -0.255 + 'px';
    greetings.style.top = value * -0.3 + 'px';
    mountains.style.top = value * -0.6 + 'px';
    land.style.top = value * 0 + 'px';
})