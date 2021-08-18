"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 30
});
var pageTitle = document.title;
var banner = document.querySelector('.homepage-banner');

if (pageTitle == "exhibinection") {
  banner.style.display = "none";
} else if (pageTitle == "exhibinection-detail") {
  banner.style.display = "none";
}
//# sourceMappingURL=all.js.map
