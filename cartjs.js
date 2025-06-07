const heart = document.getElementById('heart');
    const card = document.getElementById('card');

    heart.addEventListener('click', () => {
      card.classList.add('open');
    });

document.getElementById('heart').addEventListener('click', function () {
        const music = document.getElementById('bg-music');
        music.play().catch((err) => {
        console.log("El navegador bloqueó la reproducción automática. Se necesita interacción.");
    });
});
