document.querySelectorAll('.carousel').forEach((carousel, index) => {
  const prevBtn = carousel.parentElement.querySelector('.prev');
  const nextBtn = carousel.parentElement.querySelector('.next');
  
  let currentIndex = 0;
  
  function showImages() {
    const images = carousel.querySelectorAll('img');
    images.forEach((img, index) => {
      if (index >= currentIndex && index < currentIndex + 2) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  }
  
  function moveNext() {
    const imagesCount = carousel.querySelectorAll('img').length;
    if (currentIndex + 2 < imagesCount) {
      currentIndex += 2;
    } else {
      currentIndex = 0;
    }
    showImages();
  }
  
  function movePrev() {
    const imagesCount = carousel.querySelectorAll('img').length;
    if (currentIndex - 2 >= 0) {
      currentIndex -= 2;
    } else {
      currentIndex = imagesCount - 2;
    }
    showImages();
  }
  
  prevBtn.addEventListener('click', movePrev);
  nextBtn.addEventListener('click', moveNext);
  
  showImages(); // Mostrar las primeras imágenes al cargar la página
});
