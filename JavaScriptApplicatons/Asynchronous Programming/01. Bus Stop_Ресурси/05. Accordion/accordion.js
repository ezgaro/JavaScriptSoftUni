function solution() {
    const main = document.getElementById('main');

    fetch("http://localhost:3030/jsonstore/advanced/articles/list")
        .then(res => res.json())
        .then(data => {
            data.forEach(article => {
                const divTitle = document.createElement('div');
                divTitle.className = 'accordion';
                divTitle.innerHTML = `
                    <div class="head">
                        <span>${article.title}</span>
                        <button class="button" id="${article._id}">More</button>
                    </div>
                    <div class="extra" style="display: none;">
                        <p></p>
                    </div>
                `;
                main.appendChild(divTitle);

                const button = divTitle.querySelector('.button');
                button.addEventListener('click', () => toggleArticleDetails(article._id, button));
            });
        });

    function toggleArticleDetails(id, button) {
        const extraDiv = button.parentNode.nextElementSibling;
        if (button.textContent === 'More') {
            fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`)
                .then(res => res.json())
                .then(data => {
                    extraDiv.style.display = 'block';
                    extraDiv.querySelector('p').textContent = data.content;
                    button.textContent = 'Less';
                });
        } else {
            extraDiv.style.display = 'none';
            button.textContent = 'More';
        }
    }
}