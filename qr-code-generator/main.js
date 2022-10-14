let btn = document.querySelector('.main__button');
let generatedQRCode = document.getElementById('qrcode');

const generate = (userInput) => {
    generatedQRCode.style = '';
    let qrcode = new QRCode(generatedQRCode, {
        text: `${userInput.value}`,
        width: 200,
        height: 200,
        colorDark: '#222831',
        colorLight: '#e0e0e0',
        correctLevel: QRCode.CorrectLevel.H
    });

    console.log(qrcode);

    let downloadLink = document.createElement('a');
    downloadLink.classList.add('button');
    downloadLink.setAttribute('download', 'qr_code.png');
    downloadLink.setAttribute('title', 'Click here to download your QR Code');
    downloadLink.innerText = 'Download';
    generatedQRCode.appendChild(downloadLink);

    let qrcodeImage = document.querySelector('.main__qr-code img');
    let qrcodeCanvas = document.querySelector('canvas');

    if (qrcodeImage.getAttribute('src') == null) {
        setTimeout(() => {
            downloadLink.setAttribute('href', `${qrcodeCanvas.toDataURL()}`);
            }, 300);
    } else {
        setTimeout(() => {
            downloadLink.setAttribute('href', `${qrcodeImage.getAttribute('src')}`)
        }, 300);
    }
};

btn.addEventListener('click', () => {
    let userInput = document.querySelector('#input');

    if (userInput.value != '') {
        if (generatedQRCode.childElementCount == 0) {
            generate(userInput);
        } else {
            generatedQRCode.innerHTML = '';
            generate(userInput);
        }
        document.querySelector('.main__pop-up').classList.remove('main__pop-up--active');
    } else {
        generatedQRCode.style = 'display: none';
        document.querySelector('.main__pop-up').classList.add('main__pop-up--active');
    }
});