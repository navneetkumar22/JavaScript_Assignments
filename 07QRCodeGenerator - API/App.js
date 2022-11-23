const qrBtn = document.getElementById('submit');
const qr = document.getElementById('img');
// qr.style.display = 'block';

// Declaring qr-code generator function
function onGenerateSubmit() {

    const url = document.getElementById('input').value;

    if (url === '') {
        const refresh = confirm('Please enter a URL');
        if (refresh){
            window.location.reload();
        }
    }

    qrBtn.innerText = "Generating QR Code..."
    qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}`;
    qr.style.display = 'block';
    qr.addEventListener('load', () => {
        qrBtn.innerText = "QR Code Generated | Generate Again";
    })


}

// Adding event listener to button
qrBtn.addEventListener('click', onGenerateSubmit);