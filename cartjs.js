const heart = document.getElementById('heart');
    const card = document.getElementById('card');

    heart.addEventListener('click', () => {
      card.classList.add('open');
    });