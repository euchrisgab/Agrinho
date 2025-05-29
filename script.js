document.addEventListener('DOMContentLoaded', function() {
    const beneficiosSection = document.querySelector('#consequencias');
    if (beneficiosSection) {
        const btn = document.createElement('button');
        btn.textContent = 'Mostrar/Esconder benefícios';
        btn.style.background = '#22c55e';
        btn.style.color = '#fff';
        btn.style.border = 'none';
        btn.style.borderRadius = '8px';
        btn.style.padding = '8px 20px';
        btn.style.fontSize = '1em';
        btn.style.margin = '15px 0';
        btn.style.cursor = 'pointer';

        const lista = beneficiosSection.querySelector('ul');

        btn.onclick = function() {
            if (lista.style.display === 'none') {
                lista.style.display = 'block';
            } else {
                lista.style.display = 'none';
            }
        };

        beneficiosSection.insertBefore(btn, lista);
    }
});