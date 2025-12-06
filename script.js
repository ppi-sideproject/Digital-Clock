
    function updateClock() {
        let now = new Date();

        let hours = String(now.getHours()).toString().padStart(2, '0');
        let minutes = String(now.getMinutes()).toString().padStart(2, '0');
        let seconds = String(now.getSeconds()).toString().padStart(2, '0');
        document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock();
