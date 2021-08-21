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
var footer = document.querySelector('.footer');
var catalog = document.querySelector('.catalog');

if (pageTitle == "exhibinection") {
  banner.style.display = "none";
} else if (pageTitle == "exhibinection-detail") {
  banner.style.display = "none";
} else if (pageTitle == "checkout-confirm") {
  banner.style.display = "none";
  footer.style.display = "none";
  catalog.style.display = "none";
} else if (pageTitle == "checkout-submit") {
  banner.style.display = "none";
  footer.style.display = "none";
  catalog.style.display = "none";
} else if (pageTitle == "checkout-credit") {
  banner.style.display = "none";
  footer.style.display = "none";
  catalog.style.display = "none";
} else if (pageTitle == "checkout-finish") {
  banner.style.display = "none";
  footer.style.display = "none";
}
//# sourceMappingURL=all.js.map
