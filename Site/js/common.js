'use strict';

(function () {
  var slide = document.getElementsByClassName('slider__block');
  var prev = document.querySelector('.slider__prev');
  var next = document.querySelector('.slider__next');
  var playButton = document.querySelector('.chapter-block__video');
  var modalVideo = document.querySelector('.modal-video');
  var closeButton = document.querySelector('.modal-video-close-btn');

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    if (n > slide.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slide.length;
    }
    for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
    }
    slide[slideIndex - 1].style.display = "block";
  }

  function closeVideo() {
    modalVideo.style.display = "none";
  }

  function closeModalOnEsc(e) {
    e.keyCode === 27 ? closeVideo() : null;
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });

  next.addEventListener('click', function () {
    plusSlides(1);
  });

  playButton.addEventListener('click', function () {
    modalVideo.style.display = "block";
  });

  closeButton.addEventListener('click', function (e) {
    closeVideo(e);
  });

  modalVideo.addEventListener('click', function (e) {
    closeVideo(e);
  });

  window.addEventListener('keyup', closeModalOnEsc);
})();