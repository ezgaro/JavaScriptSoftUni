function validate() {
    let textHolderElement = document.querySelector('#email');

    textHolderElement.addEventListener('change', (e) => {
        let validator = '^[^@]+@[^@]+\.[^@]+$';
        let curValue = textHolderElement.value;
        if(!curValue.match(validator)) {
            e.target.classList.add('error');
        }
    });
}