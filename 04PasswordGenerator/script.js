const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// Copy password to clipboard
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement("textarea");
    const password = resultEl.innerText;

    if(!password){
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("Password copied to clipoard!");
})

// Adding event listener to button
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;


    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
})


// Generate Password Funtion

function generatePassword(lower, upper, number, symbol, length) {
    // Steps:
    // 1. Init a password-variable
    // 2. Filter out unchecked types
    // 3. Iterate over length and call generator funtion for each type
    // 4. Add final passwd to the password-variable and return it

    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;

    
     // array to store our functions as keys and to filter unchecked
    
     const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
        items => Object.values(items)[0]
    );

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
        })
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}







// Generating different functions

function getRandomLower() {
    const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
    return lowerAlpha[Math.floor(Math.random() * 26)];
}

function getRandomUpper() {
    const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upperAlpha[Math.floor(Math.random() * 26)];
}

function getRandomNumber() {
    const numbers = "0123456789";
    return numbers[Math.floor(Math.random() * 10)];
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

