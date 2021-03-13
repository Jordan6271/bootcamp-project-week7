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
    } else {
        for (let i = 0; i < code.length; i++){
                let ascii = code[i].charCodeAt();
                if (ascii[i] >= 33 && ascii[i] <= 126) {
                    if ((Number(ascii) + Number(key)) <= 126) {   
                    } else {
                        for (j = 0; j < key; j++) {
                            key -= 94;
                            console.log(`The key is currently ${key}`);
                            if (key <= 0) {
                                break;
                            }
                        }
                    }
                    encryptedMessage += String.fromCharCode(Number(ascii) + Number(key));
                    console.log(`Before symbol: ${code[i]}, before ascii value: ${ascii[i]}. It was shifted by: ${key}. After symbol: ${encryptedMessage[i]}, after ascii value: ${encryptedMessage[i].charCodeAt()}`);
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
    } else {
        for (let i = 0; i < code.length; i++){
            let ascii = code[i].charCodeAt();
            if (ascii >= 33 && ascii <= 126) {
                if ((Number(ascii) - Number(key)) >= 33) {
                } else {
                    console.log(`Before the loop, the key is ${key}`)
                    for (j = 0; j < key; j++) {
                        key -= 94;
                        console.log(`After the loop, the key is ${key}`)
                        if (key <= 94) {
                            break;
                        }
                    }
                    console.log(`Before symbol: ${code[i]}, before ascii value: ${ascii}`)
                    console.log(`Shifted by: ${key}`);
                    console.log(`After symbol: ${decryptedMessage}, after ascii value: ${decryptedMessage.charCodeAt()}`)
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