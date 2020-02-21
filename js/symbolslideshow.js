var slideIndex2 = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("SymbolSlideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}
  slides[slideIndex2-1].style.display = "block";
  setTimeout(showSlides2, 3000); // Change image every 2 seconds
}

