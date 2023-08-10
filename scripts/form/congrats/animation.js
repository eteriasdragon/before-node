export function showCongrats() {

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const todayFormatted = `${day < 10 ?  `0${day}` : day}.${month < 10 ?  '0' + month : month}.${year}`;
  const animationWrapper = document.createElement('div');
  const formSection = document.querySelector('.signup-section');
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
  formSection.append(animationWrapper);

  setTimeout(() => {
    formSection.querySelector('.congrats').remove();
  }, 5000)
}
