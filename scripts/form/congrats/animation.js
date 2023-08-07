export function showCongrats() {

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay() - 1;
  const todayFormatted = `${day < 10 ?  '0' + day : day}.${month < 10 ?  '0' + month : month}.${year}`;

  const animationWrapper = document.createElement('div');
  const page = document.querySelector('body');
  animationWrapper.classList.add('congrats');
  animationWrapper.insertAdjacentHTML('beforeend', `    <div class="happy">🥳</div>
    <div class="pop">🎉</div>
    <div class="pop">🎉</div>
    <div class="pop">🎉</div>
    <p>Only for users with name "Sigma" today, ${todayFormatted}, we have 120% discount!!!</p>
    <div class="pop-2">🎉</div>
    <div class="pop-2">🎉</div>
    <div class="pop-2">🎉</div>
    <div class="pop-3">🎉</div>
    <div class="pop-3">🎉</div>
    <div class="pop-3">🎉</div>`);
  page.append(animationWrapper);
  page.style.height = "100%";
  page.style.overflow = "hidden";

  setTimeout(() => {
    page.querySelector('.congrats').remove();
    page.style.height = "100%";
    page.style.overflow = "auto";
  }, 5000)
}
