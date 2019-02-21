// function that is enabled on scrolling
window.onscroll = function() {
  var audioFirst = document.getElementById("audioFirst");
  var audioSecond = document.getElementById("audioSecond");
  var audioThird = document.getElementById("audioThird");

  var firstArea = document.getElementById("first");
  var secondArea = document.getElementById("second");
  var thirdArea = document.getElementById("third");

  var textFirst = document.getElementById('text1');
  var textSecond = document.getElementById('text2');
  var textThird = document.getElementById('text3');

  var arrow = document.getElementById('arrow');


  var video = document.getElementById("interview");
  var offsetTop = video.getBoundingClientRect().top;
  var offsetBottom = video.getBoundingClientRect().bottom;


      if( offsetTop <= 840 && offsetTop > -240) {
          video.play();
      } else if ( offsetBottom < 250 || offsetBottom > 1390) {
          video.pause();
      }


  if (firstArea.getBoundingClientRect().top > 585 || firstArea.getBoundingClientRect().bottom < 58) {
    audioFirst.pause();
  } else {
    audioFirst.play();
    textFirst.style.opacity = 1;
    textFirst.style.animation = "fadeIn 3s";
  }

  if (secondArea.getBoundingClientRect().top > 685 || secondArea.getBoundingClientRect().bottom < 58) {
    audioSecond.pause();
  } else {
    audioSecond.play();
    textFirst.style.opacity = 1;
    textSecond.style.animation = "fadeIn 3s";
  }

  if (thirdArea.getBoundingClientRect().top > 585 || thirdArea.getBoundingClientRect().bottom < 58) {
    audioThird.pause();
  } else {
    audioThird.play();
    textFirst.style.opacity = 1;
    textThird.style.animation = "fadeIn 3s";
  }


}




//Text changin animation https://codepen.io/gschier/pen/jkivt


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
