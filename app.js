const content1 = document.querySelector('#content1');
const content2 = document.querySelector('#content2');
const content3 = document.querySelector('#content3');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

function openHTML() {
  content1.style.transform = "translateX(0)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(100%)";
  btn1.style.color = "#ff7846";
  btn2.style.color = "#000";
  btn3.style.color = "#000";
  content1.style.transitionDelay = "0.3s";
  content2.style.transitionDelay = "0s";
  content3.style.transitionDelay = "0s";
}

function openCSS() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(0)";
  content3.style.transform = "translateX(100%)";
  btn1.style.color = "#000";
  btn2.style.color = "#ff7846";
  btn3.style.color = "#000";
  content1.style.transitionDelay = "0s";
  content2.style.transitionDelay = "0.3s";
  content3.style.transitionDelay = "0s";
}

function openJS() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(0)";
   btn1.style.color = "#000";
   btn2.style.color = "#000";
   btn3.style.color = "#ff7846";
   content1.style.transitionDelay = "0s";
   content2.style.transitionDelay = "0s";
   content3.style.transitionDelay = "0.3s";
}