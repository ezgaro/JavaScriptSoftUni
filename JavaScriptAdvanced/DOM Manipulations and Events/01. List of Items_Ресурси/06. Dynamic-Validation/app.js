function validate() {
    let textBox = document.querySelector('input[type="text"]');
    textBox.addEventListener('change', (e) => {
        let emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if(!emailPattern.test(e.target.value)) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    });
}