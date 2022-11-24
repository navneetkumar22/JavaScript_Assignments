const container = document.querySelector('.container');
const error = document.querySelector('.error');
const bTn = document.querySelector('.btn');


bTn.addEventListener('click', () => {
    // Getting the birthday
    const doB = document.querySelector('input').value;
    let bDay = new Date(doB);
    let d1 = bDay.getDate();
    let m1 = 1 + bDay.getMonth();
    let y1 = bDay.getFullYear();

    // Grabbing todays Date
    const now = new Date();
    let d2 = now.getDate();
    let m2 = 1 + now.getMonth();
    let y2 = now.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Calculating Age
    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    const d = d2 - d1;
    const m = m2 - m1;
    const y = y2 - y1;

    document.getElementById('years').innerText = y;
    document.getElementById('months').innerText = m;
    document.getElementById('days').innerText = d;

    if(y < 0){
        document.querySelector('.age').style.display = 'none';
        error.style.display = 'block';
    }

});

