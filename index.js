const enc = document.getElementById('enc');
const interrupt = document.getElementById('interr');
const bulb = document.getElementById('bulb');
const msg = document.getElementById('msg');
let io = 0;

interrupt.addEventListener('click', (event) => {
    if (io == 0) {
        interrupt.style.animation = 'switch-on 1s forwards';
        enc.style.backgroundColor = '#e00031';
        bulb.style.backgroundImage ="url('./images/on.png')"
        bulb.style.opacity = '1';
        msg.style.display = 'block';
        io = 1;
    } else {
        interrupt.style.animation = 'switch-off 1s forwards';
        enc.style.backgroundColor = 'darkslategrey';
        bulb.style.backgroundImage ="url('./images/off.png')"
        bulb.style.opacity = '0.5';
        msg.style.display = 'none';
        io = 0;
    }
})