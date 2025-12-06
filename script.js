
    function updateClock() {
        let now = new Date();

        let hours = string(now.getHours()).toString().padStart(2, '0');
        let minutes = string( now.getMinutes()).toString().padStart(2, '0');
        let seconds = string(now.getSeconds()).toString().padStart(2, '0');
        document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock();
