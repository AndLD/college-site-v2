  window.onscroll = scrollFunction
  
  var scrollButton = document.getElementById("scrollButton")
  scrollButton.onclick = scrollToTop

  var isScrolling = false;
var canScroll = true;

window.addEventListener("scroll", function(event) {
  if (!isScrolling && canScroll) {
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

  if (currentPosition > 0) {
    scrollButton.classList.add("flight");
    canScroll = false;
    window.requestAnimationFrame(scrollStep);
  }

  function scrollStep() {
    if (currentPosition > 0) {
      currentPosition -= currentPosition / 10;
      window.scrollTo(0, currentPosition);
      window.requestAnimationFrame(scrollStep);
    } else {
      scrollButton.classList.remove("flight");
      canScroll = true;
    }
  }
}
  
 
