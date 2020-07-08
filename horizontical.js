/*
 * horizontical.js v0.0.3 (https://github.com/jackbdu/horizontical.js)
 * @copyright 2020 Jack B. Du
 * @license MIT (https://github.com/jackbdu/horizontical.js/blob/master/LICENSE)
 */

function updateHorizontical(event) {
  let hwrappers = document.querySelectorAll('.h-wrapper');
  let hviewports = document.querySelectorAll('.h-wrapper .h-viewport');
  let hcontainers = document.querySelectorAll('.h-wrapper .h-viewport .h-container');
  for (let i = 0; i < hwrappers.length && i < hcontainers.length && i < hviewports.length; i++) {
    let hwrapperStyle = window.getComputedStyle ? window.getComputedStyle(hwrappers[i]) : hwrappers[i].currentStyle;
    if (event === "resize") {
      let hcontainerStyle = window.getComputedStyle ? window.getComputedStyle(hcontainers[i]) : hcontainers[i].currentStyle;
      let hcontainerWidth = hcontainers[i].offsetWidth + parseFloat(hcontainerStyle.marginLeft || 0) + parseFloat(hcontainerStyle.marginRight || 0);
      let hwrapperExtras = parseFloat(hwrapperStyle.paddingTop || 0) + parseFloat(hwrapperStyle.paddingBottom || 0) + parseFloat(hwrapperStyle.borderTopWidth || 0) + parseFloat(hwrapperStyle.borderBottomWidth || 0)
      hwrappers[i].style.height = (hcontainerWidth - hviewports[i].clientWidth + hviewports[i].offsetHeight + hwrapperExtras) + 'px';
      hviewports[i].style = "overflow-x: hidden; position: sticky; position: webkit-sticky; top: 0;";
    } else if (event === "scroll") {
      let scrollDistance = hviewports[i].offsetTop - hwrappers[i].offsetTop - parseFloat(hwrapperStyle.paddingTop || 0) - parseFloat(hwrapperStyle.borderTopWidth || 0);
      hcontainers[i].style.transform = "translateX(-" + scrollDistance + 'px)';
    }
  }
}

document.addEventListener('DOMContentLoaded', function() { updateHorizontical("resize"); });
window.addEventListener("resize", function() { updateHorizontical("resize"); });
window.addEventListener("scroll", function() { updateHorizontical("scroll"); });
