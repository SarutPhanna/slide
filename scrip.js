let Indexslide = 1;
showslide(Indexslide);

function plusslide(n) {
  showslide((Indexslide += n));
}

function showslide(n) {
  let image = document.querySelectorAll(".slide-img");
  for (let i = 0; i < image.length; i++) {
    image[i].style.display = "none";
  }

  if (n > image.length) {
    Indexslide = 1;
  }

  if (n < 1) {
    Indexslide = image.length;
  }
  image[Indexslide - 1].style.display = "block";
}

setInterval(() => {
  showslide((Indexslide += 1));
}, 5000);