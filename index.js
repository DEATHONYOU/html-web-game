const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = canvas.width = 320;
const height = canvas.height = 480;

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";

let mp = 50;
const mpBarWidth = 200;
const mpBarHeight = 30;
const x = width / 2 - mpBarWidth / 2;
const y = height / 2 - mpBarHeight / 2 + 100;

const mpBar = new mpBar(x, y, mpBarWidth, mpBarHeight, mp, "blue");

const mpFrame = function() {
  context.clearRect(0, 0, width, height);
  healthBar.show(context);
  requestAnimationFrame(mpFrame);
}

canvas.onclick = function() {
  mp -= 10;
  healthBar.updatemp(mp);
};

mpFrame();
let health = 100;
const healthBarWidth = 200;
const healthBarHeight = 30;
const x = width / 2 - healthBarWidth / 2;
const y = height / 2 - healthBarHeight / 2;

const healthBar = new HealthBar(x, y, healthBarWidth, healthBarHeight, health, "green");

const hpFrame = function() {
  context.clearRect(0, 0, width, height);
  healthBar.show(context);
  requestAnimationFrame(frame);
}

canvas.onclick = function() {
  health -= 10;
  healthBar.updateHealth(health);
};

hpFrame();