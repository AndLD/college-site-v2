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
    if (document.documentElement.scrollTop === 0) {
      scrollButton.classList.add("hide");
    } else {
      scrollButton.style.pointerEvents = "none";
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
          scrollButton.classList.remove("show");
          scrollButton.style.pointerEvents = "auto";
        }
      }
    }
  }
  
  scrollButton.addEventListener("click", function() {
    scrollButton.style.pointerEvents = "none";
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
        scrollButton.classList.remove("show");
        scrollButton.style.pointerEvents = "auto";
      }
    }
  });
  
 
