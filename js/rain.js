function randomText() {
    const text = 'ShareVibes';
    const letter = text[Math.floor(Math.random() * text.length)];
    return letter;
}
function rain() {
    const cloud = document.querySelector('.cloud');
    const e = document.createElement('div');
    const left = Math.floor(Math.random() * 310);
    const size = Math.random() * 1.5;
    const duration = Math.random() * 1;
    const text = randomText();
    e.classList.add('text');
    e.innerText = text;
    e.style.left = left + 'px';
    e.style.fontSize = 0.5 + size + 'em';
    e.style.animationDuration = 1 + duration + 's';
    cloud.appendChild(e);
    setTimeout(() => {
        cloud.removeChild(e);
    }, 2000);
}
setInterval(rain, 20); 