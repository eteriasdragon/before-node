const portal = document.querySelector('.portal');
const approveButton = document.querySelector('.portal__modal-btn.approve-btn');

let confirmTimer = null;
let closeTabTimer = null;

approveButton.addEventListener('click', confirmExist);

startWaitingTimers();

function startWaitingTimers() {
  confirmTimer = setTimeout(function () {
    approveButton.addEventListener('click', confirmExist);
    portal.classList.add('visible');
    document.body.style.overflow = 'hidden';
    closeTabTimer = setTimeout(() => {
      window.close();
    }, 60000);
  }, 60000);
}

function confirmExist() {
  clearTimeout(closeTabTimer);
  clearTimeout(confirmTimer);
  portal.classList.remove('visible');
  document.body.style.overflow = 'visible';
  startWaitingTimers();
}

document.addEventListener('mousemove', function () {
  clearTimeout(confirmTimer);
  startWaitingTimers();
});

document.addEventListener('keydown', function () {
  clearTimeout(confirmTimer);
  startWaitingTimers();
});