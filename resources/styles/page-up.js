window.addEventListener("scroll", function() {
  var scrollButton = document.getElementById("scrollButton");
  if (window.pageYOffset > 100) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

function scrollToTop() {
  var scrollButton = document.getElementById("scrollButton");
  scrollButton.classList.add("flight");
  setTimeout(function() {
    scrollButton.classList.remove("flight");
  }, 500);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
  
 
