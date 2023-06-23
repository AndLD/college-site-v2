  function scrollFunction() {
    var scrollButton = document.getElementById("scrollButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.classList.add("show");
    } else {
      scrollButton.classList.remove("show");
    }
  }
  
  function scrollToTop() {
    var scrollButton = document.getElementById("scrollButton");
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
        }
      }
    }
  }
