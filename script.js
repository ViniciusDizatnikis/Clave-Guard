let sliderElement = document.querySelector("#slider");
let button = document.querySelector("#button");

let checked = document.querySelector("#checked");

let sizePassword = document.querySelector("#sizePassword");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");
let tooltip = document.querySelector("#tooltip");

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&áéíóúçãõâêîôûüäö';

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

async function generatePassword() {
    let pass = "";
    let n = charset.length;
    containerPassword.classList.remove("hidden");
    
    for (let i = 0; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
        password.innerHTML = pass;
        await wait(20);
    }
}

async function copyPassword() {
    try {
        await navigator.clipboard.writeText(password.innerText);
        tooltip.innerText = "Senha copiada";
        checked.classList.add('checked-animacao'); 
        await wait(1500); 
        checked.classList.remove('checked-animacao'); 
        password.classList.remove('copiar-animacao')
        tooltip.innerText = "Pressione para copiar";
        
    } catch (err) {
        console.log(err);
    }
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


password.addEventListener('click', () => {

    password.classList.remove('copiar-animacao');

    void password.offsetWidth;

    password.classList.add('copiar-animacao');

    copyPassword();
});
