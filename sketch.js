let active1 = false;
let scrollerMiddle1;



// Array of image filenames
const imageFilenames = [
  'tren1b.jpg',
  'tren2b.jpg',
  'tren3b.jpg',
  'tren4b.jpg',
  'tren5b.jpg',
  'tren6b.jpg',
  'tren8b.jpg',
  'tren9b.jpg',
  'tren10b.jpg',
  'tren11b.jpg',
];

// Array of image filenames
const imageFilenames_inicio = [
  'tren01.jpg',
  'tren02.jpg',
  'tren03.jpg',
  'tren04.jpg',
  'tren05.jpg',
  'tren06.jpg',

];


function setup() {
  createCanvas(0, 0);
  setRandomImageForImage2();
}

document.addEventListener('DOMContentLoaded', function () {
  scrollerMiddle1 = document.querySelector('.scroller-middle');
  

  // Event listeners for the first pair of images
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
    let x = e.pageX;
    x -= document.querySelector('.wrapper').getBoundingClientRect().left;
    scrollIt(x, scrollerMiddle1);
    
    
    
  });

  

  function scrollIt(x, scroller) {
    let transform = Math.max(0, Math.min(x, scroller.parentElement.offsetWidth));

    if (active1 === "middle" && scroller === scrollerMiddle1) {
      document.querySelector('.middle1').style.width = transform + "px";
      scroller.style.left = transform - 25 + "px";
    }


  }

  // Initialize the first pair of images
  active1 = "middle";
  scrollIt(460, scrollerMiddle1);
  active1 = false;

  
  

});

function setRandomImageForImage2() {
  // Get a random index from the imageFilenames array
  const randomIndex1 = Math.floor(Math.random() * imageFilenames.length);
  const randomIndex2 = Math.floor(Math.random() * imageFilenames_inicio.length);
  
  // Set the src attribute of image2 to the selected image filename
  image1.src = imageFilenames[randomIndex1];
  image2.src = imageFilenames_inicio[randomIndex2];
}
