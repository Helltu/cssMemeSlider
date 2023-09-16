document.addEventListener('DOMContentLoaded', () => {
    var slider = document.getElementsByClassName('slider')[0];
    document.getElementById('button-1').addEventListener('click', (e) => {
        if (!e.target.classList.contains('checked')) {
            const number = document.getElementsByClassName('checked')[0].id.at(-1);
            document.getElementsByClassName('checked')[0].classList.toggle('checked');
            e.target.classList.toggle('checked');
            slider.classList.toggle('pos-' + number);
            slider.classList.toggle('pos-1');
        }
    });
    document.getElementById('button-2').addEventListener('click', (e) => {
        if (!e.target.classList.contains('checked')) {
            const number = document.getElementsByClassName('checked')[0].id.at(-1);
            document.getElementsByClassName('checked')[0].classList.toggle('checked');
            e.target.classList.toggle('checked');
            slider.classList.toggle('pos-' + number);
            slider.classList.toggle('pos-2');
        }
    });
    document.getElementById('button-3').addEventListener('click', (e) => {
        if (!e.target.classList.contains('checked')) {
            const number = document.getElementsByClassName('checked')[0].id.at(-1);
            document.getElementsByClassName('checked')[0].classList.toggle('checked');
            e.target.classList.toggle('checked');
            slider.classList.toggle('pos-' + number);
            slider.classList.toggle('pos-3');
        }
    });
    document.getElementById('button-4').addEventListener('click', (e) => {
        if (!e.target.classList.contains('checked')) {
            const number = document.getElementsByClassName('checked')[0].id.at(-1);
            document.getElementsByClassName('checked')[0].classList.toggle('checked');
            e.target.classList.toggle('checked');
            slider.classList.toggle('pos-' + number);
            slider.classList.toggle('pos-4');
        }
    });
});