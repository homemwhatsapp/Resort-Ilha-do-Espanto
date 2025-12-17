
let images = [
  "img/a1.jpg",
  "img/atracao2.jpg",
  "img/atracao3.jpg",
  "img/atracao5.jpg",
  "img/atracao6.jpg",
  "img/atracao7.jpg",
  "img/atracao8.jpg",
  "img/atracao9.jpg",
  "img/atracao10.jpg",
  "img/atracao11.jpg"
];

let currentIndex = 0;

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("carouselImage").src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("carouselImage").src = images[currentIndex];
}

const images2 = [
  "img/suite1.jpg",
  "img/suite2.jpg",
  "img/suite3.jpg",
  "img/suite4.jpg",
  "img/suite5.jpg",
  "img/suite6.jpg"

];

let currentIndex2 = 0;

function nextImage2() {
  currentIndex2 = (currentIndex2 + 1) % images2.length;
  document.getElementById("carouselImage2").src = images2[currentIndex2];
}

function prevImage2() {
  currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
  document.getElementById("carouselImage2").src = images2[currentIndex2];
}