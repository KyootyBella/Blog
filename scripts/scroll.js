// when the DOM is ready
$(document).ready(function () {
  // get the anchor link buttons
  const menuBtn = $(".anchor");
  // when each button is clicked
  menuBtn.click(() => {
    // set a short timeout before taking action
    // so as to allow hash to be set
    setTimeout(() => {
      // call removeHash function after set timeout
      removeHash();
    }, 900); // 5 millisecond timeout in this case
  });

  // removeHash function
  // uses HTML5 history API to manipulate the location bar
  function removeHash() {
    history.replaceState(
      "",
      document.title,
      window.location.origin + window.location.pathname + window.location.search
    );
  }
});

//scroll animation
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 0.8)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
