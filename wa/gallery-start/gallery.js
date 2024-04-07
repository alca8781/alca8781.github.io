const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
     'portrait1.jpg', 'portrait2.jpg', 'portrait3.jpg', 'portrait4.jpg', 'portrait5.jpg'
    
];

/* Declaring the alternative text for each image file */
const altText = {
    'portrait1.jpg': 'b&w portait: freddy',
    'portrait2.jpg': 'b&w portrait: chay',
    'portrait3.jpg': 'b&w portrait: jo',
    'portrait4.jpg': 'b&w portrait: devin',
    'portrait5.jpg': 'b&w portrait: angel',
}

/* Looping through images */
for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.src = 'images/' + images[i];
    newImage.alt = altText[images[i]];
    thumbBar.appendChild(newImage);

    /* Adding a click event listener to each thumbnail image */
    newImage.addEventListener('click', function() {
        displayedImage.src = 'images/' + images[i];
        displayedImage.alt = altText[images[i]];
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    if (btn.getAttribute('class') === 'dark') {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
    } else {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
    }
});
