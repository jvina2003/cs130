let currentIndex = 0;

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" 
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });
};

initScreen();

const showImage = (ev) => {
    const elem = ev.currentTarget;
    console.log(elem.style.backgroundImage);
    console.log(document.querySelector('.featured_image').style.backgroundImage);
    document.querySelector('.featured_image').style.backgroundImage = elem.style.backgroundImage;
}

const imageElements = document.querySelectorAll('.image');
for (const elem of imageElements) {
    elem.onclick = showImage;
}



const next = () => {
    if (currentIndex < 7) {
         currentIndex += 1;
     } 
     else {
         currentIndex = 0;
     }
 
     console.log('next image', currentIndex);
     console.log(images[currentIndex]);
     document.querySelector('.featured_image').style.backgroundImage = ` url('${images[currentIndex]}')`;
 } 


const prev = () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
    } 
    else {
        currentIndex = 7;
    }

    console.log('previous image', currentIndex);
    console.log(images[currentIndex]);
    document.querySelector('.featured_image').style.backgroundImage = `url('${images[currentIndex]}')`;
} 

