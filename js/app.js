/**
 * Define Global Variables
 *
 */

var navMenu = document.getElementById("navbar__list");
var sections = document.querySelectorAll("section");
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var section4 = document.getElementById("section4");
var footer__link = document.getElementById("footer");

//  End Global Variables
// Start Helper Functions

var navBuild = () => {
  let navItem = " ";

  sections.forEach((section) => {
    navItem += `<li><a href= "#${section.id}" id="${section.id}_link" class="menu__link scroll">${section.dataset.nav}</a></li>`;
  });
  navItem += `<li><a href= "#footer" id="footer__link" class="menu__link scroll">Contact us</a></li>`;
  //build navigation list item
  navMenu.innerHTML = navItem;
};
function myFunction() {
  var x = document.getElementById("navbar__list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// End Helper Functions

navBuild();

// Scroll to section on link click

window.onload = function () {
  const easeInCubic = function (t) {
    return t * t;
  };
  const scrollElements = document.getElementsByClassName("scroll");

  const scrollToElem = (
    start,
    stamp,
    duration,
    scrollEndElementTop,
    startScrollOffset
  ) => {
    const runTime = stamp - start;
    let proccess = runTime / duration;
    const ease = easeInCubic(proccess);

    proccess = Math.min(proccess, 1);

    window.scroll(0, startScrollOffset + scrollEndElementTop * ease);

    if (runTime < duration) {
      requestAnimationFrame((timeStamp) => {
        const stamp = new Date().getTime();
        scrollToElem(
          start,
          stamp,
          duration,
          scrollEndElementTop,
          startScrollOffset
        );
      });
    }
  };

  for (let i = 0; i < scrollElements.length; i++) {
    const elem = scrollElements[i];

    elem.addEventListener("click", function (e) {
      e.preventDefault();
      const scrollElemId = e.target.href.split("#")[1];
      const scrollEndElement = document.getElementById(scrollElemId);

      const anim = requestAnimationFrame(() => {
        const stamp = new Date().getTime();
        const duration = 1100;
        const start = stamp;

        const startScrollOffset = window.pageYOffset;

        const scrollEndElementTop = scrollEndElement.getBoundingClientRect()
          .top;

        scrollToElem(
          start,
          stamp,
          duration,
          scrollEndElementTop,
          startScrollOffset
        );
      });
    });
  }
};

// Set sections as active

window.onscroll = function () {
  let scrollPosY = window.pageYOffset;
  let menu__link1 = document.getElementById("section1_link");
  let menu__link2 = document.getElementById("section2_link");
  let menu__link3 = document.getElementById("section3_link");
  let menu__link4 = document.getElementById("section4_link");
  let menu__link5 = document.getElementById("footer__link");
  const scrollToTopButton = document.querySelector("#scrollToTop");

  if (scrollPosY >= 400) {
    scrollToTopButton.classList.add("scroll__top__start");
  } else {
    scrollToTopButton.classList.remove("scroll__top__start");
  }

  if (scrollPosY >= 300 && scrollPosY <= 800) {
    menu__link1.classList.add("active__link");
    section1.classList.add("your-active-class");
  } else {
    menu__link1.classList.remove("active__link");
    section1.classList.remove("your-active-class");
  }
  if (scrollPosY >= 900 && scrollPosY <= 1300) {
    menu__link2.classList.add("active__link");
    section2.classList.add("your-active-class");
  } else {
    menu__link2.classList.remove("active__link");
    section2.classList.remove("your-active-class");
  }
  if (scrollPosY >= 1400 && scrollPosY <= 1800) {
    menu__link3.classList.add("active__link");
    section3.classList.add("your-active-class");
  } else {
    section3.classList.remove("your-active-class");
    menu__link3.classList.remove("active__link");
  }

  if (scrollPosY >= 1900 && scrollPosY <= 2300) {
    menu__link4.classList.add("active__link");
    section4.classList.add("your-active-class");
  } else {
    section4.classList.remove("your-active-class");
    menu__link4.classList.remove("active__link");
  }
  if (scrollPosY >= 2400 && scrollPosY <= 2700) {
    menu__link5.classList.add("active__link");
    footer__link.classList.add("your-active-class");
  } else {
    footer__link.classList.remove("your-active-class");
    menu__link5.classList.remove("active__link");
  }
};

// Hide fixed navigation bar while not scrolling

var time = null;
document.addEventListener("scroll", function () {
  const hideNav = document.querySelector("nav");
  if (time !== null) {
    clearTimeout(time);
    hideNav.classList.remove("hideNoScroll");
  }
  time = setTimeout(function () {
    hideNav.classList.add("hideNoScroll");
  }, 2500);
});
