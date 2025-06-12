const messages = document.querySelectorAll('.message-box');
let current = 0;
let interval = null;

function showMessage(index) {
    messages.forEach((msg, i) => {
        msg.classList.toggle('active', i === index);
    });
} // Exibe a mensagem atual e oculta as demais

function nextMessage() {
    current = (current + 1) % messages.length;
    showMessage(current);
}

function prevMessage() {
    current = (current - 1 + messages.length) % messages.length;
    showMessage(current);
}

function startAutoplay() {
    interval = setInterval(nextMessage, 6000); // 5000ms = 5 segundos
}

function resetAutoplay() {
    clearInterval(interval);
    startAutoplay();
} // Reinicia o autoplay quando um botão é clicado

// Botões
document.getElementById('nextBtn').addEventListener('click', () => {
    nextMessage();
    resetAutoplay();
}); // Botão de avançar mensagem

document.getElementById('prevBtn').addEventListener('click', () => {
    prevMessage();
    resetAutoplay();
}); // Botão de reiniciar autoplay

// Inicialização
showMessage(current);
startAutoplay();


const startDate = new Date('2020-06-27');

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff / (1000 * 60 * 60 * 24 * 30)) % 12);
    const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 365);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('counter').innerHTML =
        `${years} anos, ${months} meses,<br>
                     ${days} dias, ${hours} horas,<br>
                     ${minutes} minutos e ${seconds} segundos.`;
}


setInterval(updateCounter, 1000);
updateCounter();

function updateDaysUntilAnniversary() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextAnniversary = new Date(currentYear, 5, 27); // Junho é mês 5 (começa em 0)

    // Se já passou neste ano, calcula para o ano seguinte
    if (now > nextAnniversary) {
        nextAnniversary.setFullYear(currentYear + 1);
    }

    const diffMs = nextAnniversary - now;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    const yearsTogether = nextAnniversary.getFullYear() - 2020;

    document.getElementById('anniversaryCountdown').innerText =
        ` ${diffDays} dias para completarmos ${yearsTogether} anos juntos ❤️`;
}
setInterval(() => {
    updateCounter();
    updateDaysUntilAnniversary();
}, 1000);
