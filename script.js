const copy1 = document.getElementById("copy1");
const copy2 = document.getElementById("copy2");
const upperCaseEl = document.getElementById("upper-case");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const passwordLengthEl = document.getElementById("password-length-el")
const password1El = document.getElementById("password1-el")
const password2El = document.getElementById("password2-el")
const toast = document.getElementById("toast");

function generatePassword() {
    let passwordLength = Number(passwordLengthEl.value) || 15;

    let chars = [];

    chars = chars.concat([
        'a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'
    ]);

    if (upperCaseEl.checked) {
        chars = chars.concat([
            'A','B','C','D','E','F','G','H','I','J','K','L','M',
            'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
        ]);
    }

    if (numbersEl.checked) {
        chars = chars.concat(['0','1','2','3','4','5','6','7','8','9']);
    }

    if (symbolsEl.checked) {
        chars = chars.concat(['!','@','#','$','%','^','&','*','(',')','-','_','+','=']);
    }

    let password1 = "";
    let password2 = "";

    for (let i = 0; i < passwordLength; i++) {
        password1 += chars[Math.floor(Math.random() * chars.length)];
        password2 += chars[Math.floor(Math.random() * chars.length)];
    }

    password1El.textContent = password1;
    password2El.textContent = password2;

    // ✅ SHOW BOXES ONLY AFTER GENERATION
    document.getElementById("box1").classList.remove("hidden");
    document.getElementById("box2").classList.remove("hidden");
}
function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1200);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    showToast("Copied!");
}

copy1.addEventListener("click", () => {
    copyToClipboard(password1El.textContent);
});

copy2.addEventListener("click", () => {
    copyToClipboard(password2El.textContent);
});