const btnEncrypt = document.querySelector('.btn-encrypt');
const btnDecrypt = document.querySelector('.btn-decrypt');
let textArea = document.querySelector('#text-area');
let consoleArea = document.querySelector('.console');
const key = 'etaoinshrdlcumwfgypbvkjqxz';
let encryptionResult = '';
let decryptionResult = '';

textArea.addEventListener('input', function (event) {
  event.target.value = event.target.value.toLowerCase().replace(/[^a-z]/g, '');
});

btnEncrypt.addEventListener('click', function () {
  if (textArea.value.length == 0) {
    consoleArea.innerHTML += `Your text's length is 0. Fix, then \
    try again.<br>`
    return;
  }

  encryptionResult = doEncrypt(textArea.value, key);
  consoleArea.innerHTML += `<b>Text is:</b> ${textArea.value}<br>`;
  consoleArea.innerHTML += `<b>Encryption is:</b> ${encryptionResult}<br>`;
});

btnDecrypt.addEventListener('click', function () {
  if (textArea.value.length == 0) {
    consoleArea.innerHTML += `Your text's length is 0. Fix, then \
    try again.<br>`
    return;
  }

  decryptionResult = doDecrypt(textArea.value, key);
  consoleArea.innerHTML += `<b>Decryption is:</b> ${decryptionResult}<br>`;
});


function doEncrypt(textArea, key) {
  let result = '';
  let position = '';

  for (let i = 0; i < textArea.length; i++) {
    let temporary = textArea.charAt(i);
    position = temporary.charCodeAt(0) - 97;
    result += key[position];
  }

  return result;
};

function doDecrypt(textArea, key) {
  let result = '';
  let position = '';

  for (let i = 0; i < textArea.length; i++) {
    for (let j = 0; j < key.length; j++) {
      if (textArea[i] === key[j]) {
        position = j + 97;
      }
    }
    result += String.fromCharCode(position);
  }

  return result;
};

// Clear all
const btnClearAll = document.getElementById('btn-clear-all');

btnClearAll.addEventListener('click', () => {
  textArea.value = '';
  consoleArea.innerHTML = '';
});