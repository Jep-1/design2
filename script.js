const outsideCircle = document.querySelector('.outside-circle');
const circle = document.querySelector('.circle');
const insideCircle = document.querySelector('.inside-circle-1');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const moveX = (mouseX / windowWidth) * 100 - 50;
    const moveY = (mouseY / windowHeight) * 100 - 50;

    outsideCircle.style.transform = `translate(${moveX * -0.25}px, ${moveY * -0.25}px)`
    circle.style.transform = `translate(${moveX * - 0.26}px, ${moveY * -0.26}px)`
    insideCircle.style.transform = `translate(${moveX * -0.27}px, ${moveY * -0.27}px)`;
});

// // TextDecoderStreamtest
// TextDecoderStream
// TextDecoderStream
// TextDecoderStreamtest