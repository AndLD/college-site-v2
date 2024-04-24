document.addEventListener('DOMContentLoaded', function() {
    // Находим все изображения с классом enlargeable-image
    const images = document.querySelectorAll('.enlargeable-image');

    // Добавляем обработчик события клика на каждое изображение
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            // Проверяем, имеет ли изображение класс enlarged
            const isEnlarged = image.classList.contains('enlarged');

            // Если изображение уже увеличено, возвращаем его к исходному размеру
            if (isEnlarged) {
                image.classList.remove('enlarged');
            } else {
                // Иначе увеличиваем его
                image.classList.add('enlarged');
            }
        });
    });
});