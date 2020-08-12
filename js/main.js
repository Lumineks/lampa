const dropdown = document.querySelector('.more__btn');

dropdown.addEventListener('click', function () {
  slideToggle();
});

let slideOpen = false;
let initHeight = document.querySelector('.more__dropdown-content').offsetHeight;
let intval = null;

function slideToggle() {
  window.clearInterval(intval);
  let mdiv = document.querySelector('.more__dropdown');

  if (slideOpen) {
    slideOpen = false;
    mdiv.style.height = '0px';
    document.querySelector('.more__additional').classList.toggle('active');
  } else {
    slideOpen = true;
    mdiv.style.height = initHeight + 'px';
    document.querySelector('.more__additional').classList.toggle('active');
  }
}

(function (d) {
  let displayMin = d.querySelector('#countdown .display-min');
  let displayHour = d.querySelector('#countdown .display-hour');
  let timeLeft = parseInt(displayMin.innerHTML);
  let hours = parseInt(displayHour.innerHTML);

  let timer = setInterval(function () {
    if (--timeLeft >= 0) {
      displayMin.innerHTML = timeLeft;
    } else {
      if (--hours >= 0) {
        displayHour.innerHTML = hours;
      } else {
        hours = 14;
        displayHour.innerHTML = hours;
      }
      timeLeft = 60;
    }
  }, 3600000)
})(document)


wow = new WOW({
  animateClass: 'animate__animated',
  offset: 0,
})
wow.init();