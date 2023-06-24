  window.onscroll = scrollFunction
  
  var scrollButton = document.getElementById("scrollButton")
  scrollButton.onclick = scrollToTop

  var isScrolling = false;

  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
      scrollButton.classList.add("show");
    } else {
      scrollButton.classList.remove("show");
    }
  });
  
  function scrollToTop() {
    scrollButton.classList.add("flight");
    setTimeout(function() {
      scrollButton.classList.remove("flight");
    }, 500);
  
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
 
