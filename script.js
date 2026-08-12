// Zoom effect on click
document.querySelectorAll('.gallery .item img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);

        img.classList.add('zoomed');

        overlay.addEventListener('click', () => {
            img.classList.remove('zoomed');
            overlay.remove();
        });
    });
});
