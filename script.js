let sliderElement = document.querySelector("#slider");
let button = document.querySelector("#button");
let checked = document.querySelector("#checked");

let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");
let tooltip = document.querySelector("#tooltip");

let letrasMaiores = document.querySelector("#maiores");
let letrasMenores = document.querySelector("#menores");
let numeros = document.querySelector("#numeros");
let especiais = document.querySelector("#especiais");

const baseCharset = 'abcdefghijklmnopqrstuvwxyz'; 
const upperCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
const numberCharset = '0123456789'; 
const specialCharset = '!@#$%&áéíóúçãõâêîôûüäö'; 
let charset = baseCharset + upperCharset + numberCharset + specialCharset; 

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

async function generatePassword() {
    if (charset === "") {
        password.innerHTML = "Sem Caracteres";
        containerPassword.classList.remove("hidden");
        return;
    }
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
    if (charset === "" || password.innerHTML === "Sem Caracteres" || password.innerHTML === "Não há como copiar") {
        password.innerHTML = "Não há como copiar";
        await wait(1000);
        password.innerHTML = "Sem Caracteres";
        return;
    }

    try {
        password.classList.remove('copiar-animacao');
        void password.offsetWidth; 
        password.classList.add('copiar-animacao');
        await navigator.clipboard.writeText(password.innerText);
        tooltip.innerText = "Senha copiada";
        checked.classList.add('checked-animacao'); 
        await wait(1500); 
        checked.classList.remove('checked-animacao'); 
        password.classList.remove('copiar-animacao');
        tooltip.innerText = "Pressione para copiar";
    } catch (err) {
        console.log(err);
    }
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateCharset() {
    charset = ''; 
    if (letrasMaiores.checked) {
        charset += upperCharset; 
    }
    if (letrasMenores.checked) {
        charset += baseCharset; 
    }
    if (numeros.checked) {
        charset += numberCharset; 
    }
    if (especiais.checked) {
        charset += specialCharset; 
    }
}

letrasMaiores.addEventListener('change', updateCharset);
letrasMenores.addEventListener('change', updateCharset);
numeros.addEventListener('change', updateCharset);
especiais.addEventListener('change', updateCharset);

password.addEventListener('click', copyPassword);
