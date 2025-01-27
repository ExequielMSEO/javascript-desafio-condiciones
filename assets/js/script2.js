const input1 = document.getElementById('sticker1');
const input2 = document.getElementById('sticker2');
const input3 = document.getElementById('sticker3');
const resultado = document.getElementById('resultado');
const calcularBtn = document.getElementById('calcular');

calcularBtn.addEventListener('click', () => {
    const cantidad1 = +input1.value || 0;
    const cantidad2 = +input2.value || 0;
    const cantidad3 = +input3.value || 0;

    const total = cantidad1 + cantidad2 + cantidad3;

    if (total <= 10) {
        resultado.textContent = `Llevas ${total} stickers.`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Llevas demasiados stickers.';
        resultado.style.color = 'red';
    }
});