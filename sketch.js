let active1 = false;
let scrollerMiddle1;
let image1, image2;

// Image filename arrays
const imageFilenames = [
  'tren1b.jpg', 'tren2b.jpg', 'tren3b.jpg', 'tren4b.jpg',
  'tren5b.jpg', 'tren6b.jpg', 'tren8b.jpg', 'tren9b.jpg',
  'tren10b.jpg', 'tren11b.jpg',
];

const imageFilenames_inicio = [
  'tren01.jpg', 'tren02.jpg', 'tren03.jpg',
  'tren04.jpg', 'tren05.jpg', 'tren06.jpg',
];

function setup() {
  createCanvas(0, 0);
  // p5.js setup not used for rendering, but needed for structure
}

document.addEventListener('DOMContentLoaded', function () {
  // Grab elements
  scrollerMiddle1 = document.querySelector('.scroller-middle1');
  image1 = document.getElementById('image1');
  image2 = document.getElementById('image2');

  // Randomize images on load
  setRandomImages();

  // --- Event Listeners ---
  scrollerMiddle1.addEventListener('mousedown', function () {
    active1 = "middle";
    scrollerMiddle1.classList.add('scrolling');
  });

  document.body.addEventListener('mouseup', stopScroll);
  document.body.addEventListener('mouseleave', stopScroll);

  document.body.addEventListener('mousemove', function (e) {
    if (!active1) return;
    let x = e.pageX;
    const wrapper = document.querySelector('.wrapper');
    x -= wrapper.getBoundingClientRect().left;
    scrollIt(x, scrollerMiddle1);
  });

  // Initialize position
  active1 = "middle";
  scrollIt(460, scrollerMiddle1);
  active1 = false;
});

function stopScroll() {
  active1 = false;
  scrollerMiddle1.classList.remove('scrolling');
}

function scrollIt(x, scroller) {
  if (!scroller) return;
  const wrapperWidth = scroller.parentElement.offsetWidth;
  const transform = Math.max(0, Math.min(x, wrapperWidth));

  if (active1 === "middle" && scroller === scrollerMiddle1) {
    const middleLayer = document.querySelector('.middle1');
    if (middleLayer) {
      middleLayer.style.width = transform + "px";
      scroller.style.left = transform - 25 + "px";
    }
  }
}

function setRandomImages() {
  const randomIndex1 = Math.floor(Math.random() * imageFilenames.length);
  const randomIndex2 = Math.floor(Math.random() * imageFilenames_inicio.length);

  image1.src = imageFilenames[randomIndex1];
  image2.src = imageFilenames_inicio[randomIndex2];
}
