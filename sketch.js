<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Responsive Image Scroller</title>
<style>
  body {
    margin: 0;
    font-family: sans-serif;
  }

  .wrapper {
    position: relative;
    width: 100%;
    max-width: 1200px; /* optional max width */
    margin: 0 auto;
    overflow: hidden;
  }

  .wrapper img {
    width: 100%;       /* always full width */
    height: auto;      /* maintain aspect ratio */
    display: block;
  }

  .middle1 {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
  }

  .middle1 img {
    position: absolute;
    top: 0;
    left: 0;
  }

  .scroller-middle {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    background: rgba(255, 0, 0, 0.5);
    cursor: ew-resize;
    z-index: 10;
  }

  .scrolling {
    background: rgba(255, 0, 0, 0.8);
  }
</style>
</head>
<body>

<div class="wrapper">
  <img id="image1" src="" alt="Background image">
  <div class="middle1">
    <img id="image2" src="" alt="Foreground image">
  </div>
  <div class="scroller-middle"></div>
</div>

<script>
let active1 = false;
let scrollerMiddle1;

const imageFilenames = [
  'tren1b.jpg','tren2b.jpg','tren3b.jpg','tren4b.jpg','tren5b.jpg',
  'tren6b.jpg','tren8b.jpg','tren9b.jpg','tren10b.jpg','tren11b.jpg'
];

const imageFilenames_inicio = [
  'tren01.jpg','tren02.jpg','tren03.jpg','tren04.jpg','tren05.jpg','tren06.jpg'
];

document.addEventListener('DOMContentLoaded', function () {
  scrollerMiddle1 = document.querySelector('.scroller-middle');

  // Set initial images
  setRandomImages();

  // Mouse events
  scrollerMiddle1.addEventListener('mousedown', function () {
    active1 = "middle";
    scrollerMiddle1.classList.add('scrolling');
  });

  document.body.addEventListener('mouseup', function () {
    active1 = false;
    scrollerMiddle1.classList.remove('scrolling');
  });

  document.body.addEventListener('mouseleave', function () {
    active1 = false;
    scrollerMiddle1.classList.remove('scrolling');
  });

  document.body.addEventListener('mousemove', function (e) {
    if (!active1) return;
    let x = e.pageX - document.querySelector('.wrapper').getBoundingClientRect().left;
    scrollIt(x, scrollerMiddle1);
  });

  // Initialize scroller position
  active1 = "middle";
  scrollIt(460, scrollerMiddle1);
  active1 = false;
});

function scrollIt(x, scroller) {
  const containerWidth = scroller.parentElement.offsetWidth;
  let transform = Math.max(0, Math.min(x, containerWidth));

  if (active1 === "middle" && scroller === scrollerMiddle1) {
    document.querySelector('.middle1').style.width = transform + "px";
    scroller.style.left = transform - scroller.offsetWidth / 2 + "px";
  }
}

function setRandomImages() {
  const randomIndex1 = Math.floor(Math.random() * imageFilenames.length);
  const randomIndex2 = Math.floor(Math.random() * imageFilenames_inicio.length);

  document.getElementById('image1').src = imageFilenames[randomIndex1];
  document.getElementById('image2').src = imageFilenames_inicio[randomIndex2];
}

// Optional: Update images on window resize to maintain proper overlay
window.addEventListener('resize', () => {
  const scroller = document.querySelector('.scroller-middle');
  const middleWidth = document.querySelector('.middle1').offsetWidth;
  scrollIt(middleWidth, scroller);
});
</script>

</body>
</html>
