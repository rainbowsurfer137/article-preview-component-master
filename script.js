const shareIcon = document.querySelector('.icon-wrapper');
const footer = document.querySelector('.footer');
const tooltipMenu = document.querySelector('.tooltips-menu');

shareIcon.addEventListener('click', () => {

if (window.innerWidth >= 768) {
    tooltipMenu.classList.toggle('active');
    footer.classList.remove('active');
} else {
    footer.classList.toggle('active');
    tooltipMenu.classList.remove('active');
}
});