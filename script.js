// Countdown Timer for Library Annual Day
function startCountdown() {
    const eventDate = new Date("2025-05-01T00:00:00").getTime();
    
    setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "Event Started!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `Annual Day in ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
startCountdown();

// Form Validation
document.getElementById("registrationForm")?.addEventListener("submit", function(event) {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || email === "" || password.length < 6) {
        alert("Please fill out all fields correctly!");
        event.preventDefault();
    }
});
