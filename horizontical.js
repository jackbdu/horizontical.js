/*
 * horizontical.js v0.0.1 (https://github.com/jackbdu/horizontical.js)
 * @copyright 2020 Jack B. Du
 * @license MIT (https://github.com/jackbdu/horizontical.js/blob/master/LICENSE)
 */

function updateHorizontical(event) {
  let hwrappers = document.querySelectorAll('.h-wrapper');
  let hviewports = document.querySelectorAll('.h-wrapper .h-viewport');
  let hcontainers = document.querySelectorAll('.h-wrapper .h-viewport .h-container');
  for (let i = 0; i < hwrappers.length && i < hcontainers.length && i < hviewports.length; i++) {
    if (event === "resize") {
      hwrappers[i].style.height = (hcontainers[i].offsetWidth - hviewports[i].clientWidth + hviewports[i].offsetHeight + parseFloat(window.getComputedStyle(hwrappers[i]).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(hwrappers[i]).getPropertyValue('padding-bottom')) + parseFloat(window.getComputedStyle(hwrappers[i]).getPropertyValue('border-top-width')) + parseFloat(window.getComputedStyle(hwrappers[i]).getPropertyValue('border-bottom-width'))) + 'px';
      hviewports[i].style = "overflow-x: hidden; position: sticky; position: webkit-sticky; top: 0;";
    } else if (event === "scroll") {
      let scrollDistance = hviewports[i].offsetTop - hwrappers[i].offsetTop - parseFloat(window.getComputedStyle(hwrappers[i]).getPropertyValue('padding-top')) - parseFloat(window.getComputedStyle(hwrappers[i]).getPropertyValue('border-top-width'));
      hcontainers[i].style.transform = "translateX(-" + scrollDistance + 'px)';
    }
  }
}

document.addEventListener('DOMContentLoaded', function() { updateHorizontical("resize"); });
window.addEventListener("resize", function() { updateHorizontical("resize"); });
window.addEventListener("scroll", function() { updateHorizontical("scroll"); });
