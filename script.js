// const carousel = document.querySelector('.carousel');
// const cards = document.querySelectorAll('.card');
// const dots = document.querySelectorAll('.dot');

// let cardIndex = 0;

// function showCard(index) {
//     carousel.style.transform = `translateX(-${index * 100}%)`;
// }

// function updateDots(index) {
//     dots.forEach((dot, i) => {
//         dot.classList.remove('active');
//         if (i === index) {
//             dot.classList.add('active');
//         }
//     });
// }

// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         showCard(index);
//         updateDots(index);
//         cardIndex = index;
//     });
// });

// function nextCard() {
//     cardIndex++;
//     if (cardIndex === cards.length) {
//         cardIndex = 0;
//     }
//     showCard(cardIndex);
//     updateDots(cardIndex);
// }

// setInterval(nextCard, 5000);