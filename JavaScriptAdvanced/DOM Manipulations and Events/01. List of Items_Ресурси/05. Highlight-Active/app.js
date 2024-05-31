function focused() {
    let sections = document.querySelectorAll("input[type='text']");
    let sectionsArr = Array.from(sections);
    for (const inputBox of sectionsArr) {
        inputBox.addEventListener('focus', (e) => {
            e.target.parentNode.classList.add('focused');
        });
        inputBox.addEventListener('blur', (e) => {
            e.target.parentNode.classList.remove('focused');
        });
    }
}