document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger')
    const navlinks = document.querySelector('.nav-links')

    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navlinks?.classList.toggle('hidden');
        navlinks?.classList.toggle('show');
    })
})
