function getArticleGenerator(articles) {
    let contentId = document.querySelector('#content');
    let curIndex = 0;
    return () => {
        contentId.textContent = articles[curIndex];
        ++curIndex;
    }
}
