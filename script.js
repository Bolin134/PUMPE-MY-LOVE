document.addEventListener("DOMContentLoaded", function () {
      const endDate = new Date("2025-06-07T00:00:00").getTime();

      function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
          document.getElementById("countdown").innerHTML = `
            <h2>¡La fecha ha llegado!</h2>
            <button onclick="window.location.href='HAPPY.html'" style="
              margin-top: 20px;
              padding: 10px 20px;
              background-color: #00f2fe;
              border: none;
              color: #000;
              border-radius: 8px;
              cursor: pointer;
              font-size: 1rem;
              ">
                Ver Carta 💌
              </button>
            `;
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
      }

      updateCountdown();
      setInterval(updateCountdown, 1000);
    });
