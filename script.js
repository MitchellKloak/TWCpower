document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    let time = 0;
    let timer;
    let activeBoxesCount = 0;
    const timerEl = document.getElementById('timer-clicked');
    const activeBoxesEl = document.getElementById('active-boxes');

    // Initialize timer display
    timerEl.textContent = time;
    activeBoxesEl.textContent = activeBoxesCount;

    // Function to update the timer display
    function updateTimer() {
        timerEl.textContent = time;
    }

    // Function to update the active boxes count display
    function updateActiveBoxesCount() {
        activeBoxesEl.textContent = activeBoxesCount;
    }

    // Function to increase time and update display
    function clockTick() {
        time++;
        updateTimer();
    }

    // Add click event listener to each box
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('active');
            if (box.classList.contains('active')) {
                time++; // Increment time when box is activated
                activeBoxesCount++; // Increment active boxes count
            } else {
                time--; // Decrement time when box is deactivated
                activeBoxesCount--; // Decrement active boxes count
            }
            updateTimer();
            updateActiveBoxesCount();

            // Check if any box is active and manage timer
            const anyActive = Array.from(boxes).some(box => box.classList.contains('active'));
            if (anyActive && !timer) {
                timer = setInterval(clockTick, 1000); // Adjust the interval as needed
            } else if (!anyActive && timer) {
                clearInterval(timer);
                timer = null;
            }
        });
    });
});
