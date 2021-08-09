const images = ['bunbery.jpg', 'bunbery2.jpg','coober.jpg', 'coober2.jpg', 'desert1.jpg','me.jpg', 'park.jpg', 'tour.jpg', 'uluru.JPG', 'uluru2.jpg'];

const image = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${image}`;

const imgBox = document.querySelector(".img-box");
console.log(imgBox)
imgBox.appendChild(bgImage);