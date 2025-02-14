document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.control-button');
    let isPlaying = false;

    playButton.addEventListener('click', () => {
        if (isPlaying) {
            playButton.textContent = '⏯'; // Pause
        } else {
            playButton.textContent = '▶'; // Play
        }
        isPlaying = !isPlaying;
    });
});