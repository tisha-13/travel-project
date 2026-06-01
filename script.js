const menutoggle = document.querySelector("#menu_toggle");
const navLinks = document.querySelector('.nav_links');

menutoggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})