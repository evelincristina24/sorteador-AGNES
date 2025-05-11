function generateNumber() {
    const minInput = document.querySelector('.input-min');
    const maxInput = document.querySelector('.input-max');
    const resultadoElement = document.getElementById('resultado');
    const resultadoTextoElement = resultadoElement.querySelector('.resultado-texto');
    const overlayElement = document.getElementById('overlay');

    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    if (isNaN(min) || isNaN(max)) {
        resultadoTextoElement.textContent = "Insira números válidos";
        resultadoElement.classList.add('show');
        overlayElement.classList.add('show');

        return;
    }

    if (min > max) {
        resultadoTextoElement.textContent = "Mínimo deve ser menor que o máximo";
        resultadoElement.classList.add('show');
        overlayElement.classList.add('show');
    
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    resultadoTextoElement.textContent = "NÚMERO SORTEADO: " + result;
    resultadoElement.classList.add('show');
    overlayElement.classList.add('show');
}

document.addEventListener('DOMContentLoaded', () => {
    const fecharResultadoBtn = document.getElementById('fecharResultado');
    const resultadoElement = document.getElementById('resultado');
    const overlayElement = document.getElementById('overlay');

    if (fecharResultadoBtn && resultadoElement && overlayElement) {
        fecharResultadoBtn.addEventListener('click', () => {
            resultadoElement.classList.remove('show');
            overlayElement.classList.remove('show');
            const resultadoTextoElement = resultadoElement.querySelector('.resultado-texto');
            if (resultadoTextoElement) {
                resultadoTextoElement.textContent = "";
            }
        });
    }
});