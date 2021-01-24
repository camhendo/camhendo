import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();



const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true
});