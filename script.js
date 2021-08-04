const changeBG = document.querySelector('.change-bg');
const jumbotron = document.querySelector('.jumbotron');

changeBG.addEventListener('click', function () {
  const MR = Math.random().toFixed(2);
  if(MR <= 0.25) {
    jumbotron.style.backgroundImage = 'url(img/1.3.jpg)';
  } else if(MR <= 0.50) {
    jumbotron.style.backgroundImage = 'url(img/1.4.jpg)';
  } else if(MR <= 0.75) {
    jumbotron.style.backgroundImage = 'url(img/2.jpg)';
  } else {
    jumbotron.style.backgroundImage = 'url(img/3.jpg)';
  }
});

// Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

