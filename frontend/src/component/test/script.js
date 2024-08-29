document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.getElementById('overlay');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
});

document.getElementById('overlay').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.getElementById('overlay');
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
});