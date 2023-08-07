const copy = document.querySelector('.footer__copyright');
const date = new Date();
copy.innerHTML = `Copyright @ ${date.getFullYear()} <span>Brandoxide</span>.all right reserved.`;