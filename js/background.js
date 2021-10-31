const images = ["rose0.jpg","rose1.jpg","rose2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
console.log(bgImage);

document.body.appendChild(bgImage);