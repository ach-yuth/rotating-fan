const on = document.querySelector(".on");
const off = document.querySelector(".off");
const slow = document.querySelector(".slow");
const medium = document.querySelector(".medium");
const speed = document.querySelector(".speed");
const fan = document.querySelector(".fan");
const buttons = document.querySelectorAll("button");

function start() {
  on.addEventListener("click", () => {
    on.classList.add("active");
    off.classList.remove("active");
    fan.classList.add("activeon");
    fan.classList.remove("active1");
    fan.classList.remove("active2");
    fan.classList.remove("active3");
    fan.classList.remove("activeoff");
    min();
    avg();
    max();
  });
}
start();
function min() {
  slow.addEventListener("click", () => {
    fan.classList.add("active1");
    fan.classList.remove("active2");
    fan.classList.remove("active3");
    fan.classList.remove("activeoff");
  });
}
function avg() {
  medium.addEventListener("click", () => {
    fan.classList.add("active2");
    fan.classList.remove("active1");
    fan.classList.remove("active3");
    fan.classList.remove("activeon");
    fan.classList.remove("activeoff");
  });
}
function max() {
  speed.addEventListener("click", () => {
    fan.classList.add("active3");
    fan.classList.remove("active1");
    fan.classList.remove("active2");
    fan.classList.remove("activeon");
    fan.classList.remove("activeoff");
  });
}
function stop() {
  off.addEventListener("click", () => {
    off.classList.add("active");
    on.classList.remove("active");
    fan.classList.add("activeoff");
    fan.classList.remove("active1");
    fan.classList.remove("active2");
    fan.classList.remove("active3");
    fan.classList.remove("activeon");
    stopAll;
  });
}
stop();
