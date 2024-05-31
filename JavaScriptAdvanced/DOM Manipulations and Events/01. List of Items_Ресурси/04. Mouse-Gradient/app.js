function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', (e) => {
        let percent = Math.floor((e.offsetX / e.target.offsetWidth) * 100);
        document.getElementById('result').textContent = percent;
    });
}