window.onload = () => {
    const btn = document.getElementById('btn');
    const contador = document.getElementById('contador');
    btn.addEventListener('click', () => {
        addOne(contador);
    });
}

/**
 * Aumenta el contador en 1
 * @param {*} contador - Elemento HTML que contiene el contador
 */
function addOne(contador) {
    contador.innerHTML = parseInt(contador.innerHTML) + 1;
}