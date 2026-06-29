const toggleBtn = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.querySelectorAll('.navbar-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});