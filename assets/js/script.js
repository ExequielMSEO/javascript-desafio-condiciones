const input = document.querySelector('input')
const btn = document.querySelector('button')
const parrafo = document.querySelector('p')
const img = document.querySelector('img')


img.addEventListener('click', () => {
    if (img.style.border === '2px solid red') {
        img.style.border = 'none';
    } else {
        img.style.border = '2px solid red';
    }
});

