let code, key;

function encrypt() {
    code = document.getElementById(`code`).value;
    key = document.getElementById(`key`).value;
    let encryptedMessage = ``;

    for (let i = 0; i < code.length; i++){
            let ascii = code[i].charCodeAt();
                if ( ascii >= 65 && ascii <= (90 - key) ){
                    encryptedMessage += String.fromCharCode(Number(ascii) + Number(key));
                } else if ( ascii > (90 - key)  && ascii <= 90 ){
                    encryptedMessage += String.fromCharCode(Number(ascii) - Number(key));
                } else if ( ascii >= 97 && ascii <= (122 - key) ){
                    encryptedMessage += String.fromCharCode(Number(ascii) + Number(key));
                } else if ( ascii > (122 - key)  && ascii <= 122 ){
                    encryptedMessage += String.fromCharCode(Number(ascii) - Number(key));
                } else {
                    encryptedMessage += code[i];
                }
            }
    console.log(encryptedMessage);
    document.getElementById(`input-area`).className = document.getElementById(`input-area`).className.replace(/\bd-block\b/g, `d-none`);
    document.getElementById(`results-area`).className = document.getElementById(`input-area`).className.replace(/\bd-none\b/g, `d-block`);
    document.getElementById(`results`).innerHTML = `<p>Your encrypted message is:</br>${encryptedMessage}</p>`;
}

function letterChange(letter, key) {
    let newLetter = ``;
    
    let letterCode = letter.charCodeAt(0);
    let encryptedLetter = letterCode + (key % 26);
    
    if (encryptedLetter < 97) {
        encryptedLetter += 26;
    } else if(encryptedLetter > 122) {
        encryptedLetter -= 26;
    }
    newLetter = String.fromCharCode(encryptedLetter);
    return newLetter
}

function retry() {
    document.getElementById(`code`).value = ``;
    document.getElementById(`key`).value = ``;
    document.getElementById(`results-area`).className = document.getElementById(`input-area`).className.replace(/\bd-block\b/g, `d-none`);
    document.getElementById(`input-area`).className = document.getElementById(`input-area`).className.replace(/\bd-none\b/g, `d-block`);
}