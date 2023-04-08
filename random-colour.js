const boxes = document.querySelectorAll('.myBox');

boxes.forEach(box => {
    box.addEventListener('pointerover', () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${red}, ${green}, ${blue})`;
        box.style.backgroundColor = randomColor;
    });
});
