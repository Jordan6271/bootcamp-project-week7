let code, key;

function encrypt() {
    code = document.getElementById(`code`).value;
    key = document.getElementById(`key`).value;
    let encryptedMessage = ``;

    for (let i = 0; i < code.length; i++){
            let ascii = code[i].charCodeAt();
            if (ascii >= 33 && ascii <= 126) {
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
            } else {
                encryptedMessage += code[i];
            }      
    }
    document.getElementById(`input-area`).className = document.getElementById(`input-area`).className.replace(/\bd-block\b/g, `d-none`);
    document.getElementById(`results-area`).className = document.getElementById(`input-area`).className.replace(/\bd-none\b/g, `d-block`);
    document.getElementById(`results`).innerHTML = `<p>Your encrypted message is:</br>${encryptedMessage}</p>`;
}

function decrypt() {
    code = document.getElementById(`code`).value;
    key = document.getElementById(`key`).value;
    let decryptedMessage = ``;

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
            }
            decryptedMessage += String.fromCharCode(Number(ascii) - Number(key));
        } else {
            decryptedMessage += code[i];
        }
        console.log(`Before symbol: ${code[i]}, before ascii value: ${ascii}`)
        console.log(`Shifted by: ${key}`);
        console.log(`After symbol: ${decryptedMessage}, after ascii value: ${decryptedMessage.charCodeAt()}`)
}
    document.getElementById(`input-area`).className = document.getElementById(`input-area`).className.replace(/\bd-block\b/g, `d-none`);
    document.getElementById(`results-area`).className = document.getElementById(`input-area`).className.replace(/\bd-none\b/g, `d-block`);
    document.getElementById(`results`).innerHTML = `<p>Your decrypted message is:</br>${decryptedMessage}</p>`;
}

function retry() {
    document.getElementById(`code`).value = ``;
    document.getElementById(`key`).value = ``;
    document.getElementById(`results-area`).className = document.getElementById(`input-area`).className.replace(/\bd-block\b/g, `d-none`);
    document.getElementById(`input-area`).className = document.getElementById(`input-area`).className.replace(/\bd-none\b/g, `d-block`);
}