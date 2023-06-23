  window.onscroll = scrollFunction
  
  var scrollButton = document.getElementById("scrollButton")
  scrollButton.onclick = scrollToTop

var isScrolling = false;

window.addEventListener("scroll", function(event) {
  if (!isScrolling) {
    window.requestAnimationFrame(function() {
      scrollFunction();
      isScrolling = false;
    });
    isScrolling = true;
  }
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
}

function scrollToTop() {
  var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  scrollButton.classList.add("flight");
  window.requestAnimationFrame(scrollStep);

  function scrollStep() {
    if (currentPosition > 0) {
      currentPosition -= currentPosition / 10;
      window.scrollTo(0, currentPosition);
      window.requestAnimationFrame(scrollStep);
    } else {
      scrollButton.classList.remove("flight");
      if (document.documentElement.scrollTop === 0) {
        scrollButton.classList.add("hide");
        window.removeEventListener("wheel", preventScroll);
      }
    }
  }

  function preventScroll(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  window.addEventListener("wheel", preventScroll, { passive: false });
  
  setTimeout(function() {
    window.removeEventListener("wheel", preventScroll);
  }, 400); // Позволяет прокрутке возобновиться через 400 миллисекунд
}
  
 
