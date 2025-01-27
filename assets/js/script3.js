document.querySelector('button').onclick = function() {
    var primero = document.getElementById('primero').value;
    var segundo = document.getElementById('segundo').value;
    var tercero = document.getElementById('tercero').value;

    var password = primero + segundo + tercero;

    var mensaje = document.getElementById('mensaje');

    if (password === '911') {
        mensaje.textContent = 'Password 1 correcto';
        mensaje.style.color = 'green';
    } else if (password === '714') {
        mensaje.textContent = 'Password 2 correcto';
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'Password incorrecto';
        mensaje.style.color = 'red';
    }
}