// const btn = document.querySelector('.btn');


// if (localStorage.getItem('theme') === 'dark') {
//     document.body.classList.add('dark');
// }

// btn.addEventListener('click', () => {
//     document.body.classList.toggle('dark');

 
//     const isDark = document.body.classList.contains('dark');
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');
// });

//------------------


// const lisPhotos = [
//     "https://images.pexels.com/photos/34410322/pexels-photo-34410322.jpeg",
//     "https://images.pexels.com/photos/14111848/pexels-photo-14111848.jpeg",
//     "https://images.pexels.com/photos/30404377/pexels-photo-30404377.jpeg",
//    "https://images.pexels.com/photos/34585948/pexels-photo-34585948.jpeg",
//      "https://images.pexels.com/photos/34852999/pexels-photo-34852999.jpeg",
//      "https://images.pexels.com/photos/29531015/pexels-photo-29531015.jpeg",
//   "https://images.pexels.com/photos/33892368/pexels-photo-33892368.jpeg",
//   "https://images.pexels.com/photos/34553204/pexels-photo-34553204.jpeg"
// ]

// const btn = document.querySelector('.btn');
// const img = document.querySelector('#photo');

// btn.addEventListener('click', () => {
//     const random = Math.floor(Math.random() * lisPhotos.length);
//     img.src = lisPhotos[random];   
// });

//--------------------

// const images = [
//     "https://images.pexels.com/photos/34410322/pexels-photo-34410322.jpeg",
//     "https://images.pexels.com/photos/14111848/pexels-photo-14111848.jpeg",
//     "https://images.pexels.com/photos/30404377/pexels-photo-30404377.jpeg",
//     "https://images.pexels.com/photos/34585948/pexels-photo-34585948.jpeg",
//     "https://images.pexels.com/photos/34852999/pexels-photo-34852999.jpeg",
//     "https://images.pexels.com/photos/29531015/pexels-photo-29531015.jpeg",
//     "https://images.pexels.com/photos/33892368/pexels-photo-33892368.jpeg"
// ];

// let currentIndex = 0;
// const imgElement = document.getElementById('gallery');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');
// const slideshowBtn = document.getElementById('slideshow');
// let interval = null;


// function updateGallery() {
//     imgElement.src = images[currentIndex];

//     prevBtn.disabled = currentIndex === 0;
//     nextBtn.disabled = currentIndex === images.length - 1;
// }


// prevBtn.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         updateGallery();
//     }
// });

// nextBtn.addEventListener('click', () => {
//     if (currentIndex < images.length - 1) {
//         currentIndex++;
//         updateGallery();
//     }
// });


// slideshowBtn.addEventListener('click', () => {
//     if (interval === null) {
//         interval = setInterval(() => {
//             if (currentIndex < images.length - 1) {
//                 currentIndex++;
//             } else {
//                 currentIndex = 0; 
//             }
//             updateGallery();
//         }, 2000); 
//         slideshowBtn.textContent = "Стоп слайд-шоу";
//     } else {
//         clearInterval(interval);
//         interval = null;
//         slideshowBtn.textContent = "Слайд-шоу";
//     }
// });


// updateGallery();
//------------------------------------
const input = document.getElementById('search');
const cards = document.querySelectorAll('.card');

input.addEventListener('input', () => {
    const value = input.value.toLowerCase(); 
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(value)) {
            card.classList.remove('hidden'); 
        } else {
            card.classList.add('hidden'); 
        }
    });
});
