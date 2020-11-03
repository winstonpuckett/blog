let cards = []
window.addEventListener('load', () => {
    cards = document.querySelectorAll('.card')
});

function filterPosts(filterString) {
    const cardArray = Array.from(cards);
    const relevantCards = cardArray.filter(card => {
        const containedInTags = JSON.parse(card.dataset.postTags).some(tag => tag.toLowerCase().includes(filterString.toLowerCase()))
        const containedInTitle = card.dataset.postTitle.toLowerCase().includes(filterString.toLowerCase());

        return containedInTags || containedInTitle;
    });
    const notRelevantCards = cardArray.filter(card => {
        return !(relevantCards.includes(card));
    });

    for (const card of relevantCards) {
        card.style.display = 'flex';
    }
    for (const card of notRelevantCards) {
        card.style.display = 'none';
    }
}

function showPostsFilter() {
    document.querySelector('.postsfilter__input').classList.add('active')
}