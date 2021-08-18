$(function() {
  console.log('Hello Bootstrap5');
});

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 30,

});

let pageTitle = document.title
let banner = document.querySelector('.homepage-banner')

if(pageTitle =="exhibinection") {
  banner.style.display="none"
}else if(pageTitle =="exhibinection-detail"){
  banner.style.display="none"
}