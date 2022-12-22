window.addEventListener('load', function(e) {


    // capturing HTML elements
    const textarea = document.querySelector('textarea#textarea');
    const outputMessage = document.querySelector('p.output-message');
    const firstOutput = document.querySelector('div.first-output');
    const btnEncrypt = document.querySelector('button.encrypt');
    const btnDecrypt = document.querySelector('button.decrypt');
    const btnCopy = document.querySelector('button.copy');
    // const encryptionPattern = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    const encryptionPattern = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    //hide and show HTML elements
    function changeVisibility(){
        outputMessage.style.display = 'initial';
        btnCopy.style.display = 'initial';
        firstOutput.style.display = 'none';
    }

    //encrypt entered text
    function encryptText(textToEncrypt){
        let encryptedText = textToEncrypt.trim().toLowerCase().split('');

        console.log(encryptedText);
        for(let i=0; i < encryptedText.length; i++){
            switch(encryptedText[i]){
                case 'a':{
                    encryptedText[i] = encryptionPattern[0][1];
                    break;
                }
                case 'e':{
                    encryptedText[i] = encryptionPattern[1][1];
                    break;
                }
                case 'i':{
                    encryptedText[i] = encryptionPattern[2][1];
                    break;
                }
                case 'o':{
                    encryptedText[i] = encryptionPattern[3][1];
                    break;
                }
                case 'u':{
                    encryptedText[i] = encryptionPattern[4][1];
                    break;
                }
            }
        }

        console.log(encryptedText);

        // for(let i = 0; i < encryptionPattern.length; i++) {
        //     if(encryptedText.includes(encryptionPattern[i][0])){
        //         encryptedText = encryptedText.replace(encryptionPattern[i][0], encryptionPattern[i][1]);
        //     };
        // }

        return encryptedText.join('');
    }

    //decrypt entered text
    function decryptText(textToDecrypt){
        let decryptedText = textToDecrypt;
        for(let i = 0; i < encryptionPattern.length; i++) {
            if(textToDecrypt.includes(encryptionPattern[i][1])){
                decryptedText = decryptedText.replaceAll(encryptionPattern[i][1], encryptionPattern[i][0]);
            };
        }
        return decryptedText;
    }

    //copy text
    function copyText(){
        navigator.clipboard.writeText(outputMessage.textContent);
        alert("Copied!");
    }

    //button events
    btnEncrypt.addEventListener('click', ()=>{
        changeVisibility()
        outputMessage.innerHTML = encryptText(textarea.value);
        textarea.value = '';
    });

    btnCopy.addEventListener('click', ()=> {
        copyText()
    });

    btnDecrypt.addEventListener('click', ()=> {
        outputMessage.innerHTML = decryptText(textarea.value);
        textarea.value = '';
    });

});