const CryptoJS = require("crypto-js");

//The Function Below To Encrypt Text
const encryptText = (text) => {
    const passphrase = "My Secret Passphrase";
    return CryptoJS.AES.encrypt(text, passphrase).toString();
};


//The Function Below To Decrypt Text
const decrypt = (ciphertext) => {
    const passphrase = "My Secret Passphrase";
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
};

let encryptedText = encryptText("hello")
console.log(encryptedText)
// U2FsdGVkX19mKedtlztqY5YK3I6E4AjmNUEKtlakLp4=

let decryptedText = decrypt("U2FsdGVkX19mKedtlztqY5YK3I6E4AjmNUEKtlakLp4=")
console.log(decryptedText)