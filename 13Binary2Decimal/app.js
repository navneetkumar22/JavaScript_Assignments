let submitBtn = document.querySelector('.btn');


submitBtn.addEventListener('click', (e) => {

    e.preventDefault();

    let inPut = document.getElementById('binary').value;
    let digit = parseInt(inPut, 2);

    document.getElementById('output').innerHTML = digit;

});