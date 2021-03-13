let code, key;

function encrypt() {
    code = document.getElementById(`code`).value;
    key = document.getElementById(`key`).value;
    let encryptedMessage = ``;
    if (code == `` && !key == ``) {
        alert(`You haven't entered a code.`);
    } else if (!code == `` && key == ``) {
        alert(`You haven't entered a key.`);
    } else if (code == `` && key == ``) {
        alert(`You haven't entered anything, what do you expect me to do here?`);
    } else if (key.match(/\b.*?[^0-9].*\b/g)) {
        alert(`A key cannot include non-numerical digits.`);
    } else if (key >= 100000) {
        alert(`The maximum value for the key is 99999.`);
    } else {
        for (let i = 0; i < code.length; i++) {
                let ascii = code[i].charCodeAt();
                key = document.getElementById(`key`).value;
                if (Number(ascii) >= 33 && Number(ascii) <= 126) {
                    if ((Number(ascii) + Number(key)) <= 126) {
                        encryptedMessage += String.fromCharCode(Number(ascii) + Number(key));
                    } else {
                        let newKey = key;
                        console.log(`The key initially was ${key}`)
                        for (j = 0; j < key; j++) {
                            if (Number(ascii) + Number(newKey) <= 126) {
                                encryptedMessage += String.fromCharCode(Number(ascii) + Number(newKey));
                                break;
                            }
                            newKey -= 94;
                            console.log(`The new key is ${newKey}`)
                        }
                    }
                } else {
                    encryptedMessage += code[i];
                }      
        }
        document.getElementById(`intro-area`).className = document.getElementById(`intro-area`).className.replace(/\bd-block\b/g, `d-none`);
        document.getElementById(`input-area`).className = document.getElementById(`input-area`).className.replace(/\bd-block\b/g, `d-none`);
        document.getElementById(`results-area`).className = document.getElementById(`results-area`).className.replace(/\bd-none\b/g, `d-block`);
        document.getElementById(`content-background`).className = document.getElementById(`content-background`).className.replace(/\bbg\b/g, `bg-success`);
        document.getElementById(`results`).innerHTML = `<p>Your encrypted message is: <span style= "font-weight:bold;">${encryptedMessage}</span></p>`;
    }
}

function decrypt() {
    code = document.getElementById(`code`).value;
    key = document.getElementById(`key`).value;
    let decryptedMessage = ``;
    if (code == `` && !key == ``) {
        alert(`You haven't entered a code.`);
    } else if (!code == `` && key == ``) {
        alert(`You haven't entered a key.`);
    } else if (code == `` && key == ``) {
        alert(`You haven't entered anything, what do you expect me to do here?`);
    } else if (key.match(/\b.*?[^0-9].*\b/g)) {
        alert(`A key cannot include non-numerical digits.`);
    } else if (key >= 100000) {
        alert(`The maximum value for the key is 99999.`);
    } else {
        for (let i = 0; i < code.length; i++){
            let ascii = code[i].charCodeAt();
            key = document.getElementById(`key`).value;
            if (ascii >= 33 && ascii <= 126) {
                if ((Number(ascii) - Number(key)) >= 33) {
                } else {
                    for (j = 0; j < key; j++) {
                        if (Number(ascii) - Number(key) >= 33) {
                            break;
                        }
                        key -= 94; 
                    }
                }
                decryptedMessage += String.fromCharCode(Number(ascii) - Number(key));
            } else {
                decryptedMessage += code[i];
            }
        }
        document.getElementById(`intro-area`).className = document.getElementById(`intro-area`).className.replace(/\bd-block\b/g, `d-none`);
        document.getElementById(`input-area`).className = document.getElementById(`input-area`).className.replace(/\bd-block\b/g, `d-none`);
        document.getElementById(`results-area`).className = document.getElementById(`results-area`).className.replace(/\bd-none\b/g, `d-block`);
        document.getElementById(`results`).innerHTML = `<p>Your decrypted message is: <span style= "font-weight:bold;">${decryptedMessage}</span></p>`;
        document.getElementById(`content-background`).className = document.getElementById(`content-background`).className.replace(/\bbg\b/g, `bg-danger`);
    }
}

function retry() {
    document.getElementById(`code`).value = ``;
    document.getElementById(`key`).value = ``;
    document.getElementById(`intro-area`).className = document.getElementById(`intro-area`).className.replace(/\bd-none\b/g, `d-block`);
    document.getElementById(`input-area`).className = document.getElementById(`input-area`).className.replace(/\bd-none\b/g, `d-block`);
    document.getElementById(`results-area`).className = document.getElementById(`results-area`).className.replace(/\bd-block\b/g, `d-none`);
    if (document.getElementById(`content-background`).classList.contains(`bg-success`)) {
        document.getElementById(`content-background`).className = document.getElementById(`content-background`).className.replace(/\bbg-success\b/g, `bg`);
    } else {
        document.getElementById(`content-background`).className = document.getElementById(`content-background`).className.replace(/\bbg-danger\b/g, `bg`);
    }
}