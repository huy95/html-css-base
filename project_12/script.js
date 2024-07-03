
const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(togglek => {
    togglek.addEventListener('click', () => {
        togglek.parentNode.classList.toggle('active');
    });
});