window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scrollButton');
    if (window.scrollY > 0) {
      scrollButton.style.display = 'block'; // Показываем кнопку при прокрутке вниз
    } else {
      scrollButton.style.display = 'none'; // Скрываем кнопку, если прокрутка вверх
    }
  });