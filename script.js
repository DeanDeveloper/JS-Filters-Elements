
function filterCard({target}) {
     let filter, cards, title;

     filter = target;
     cards = document.querySelectorAll('.cards .cards__item');

     this.value != '' ?
          (cards.forEach(card => {
               title = card.querySelector('h3');

               title = title.textContent.toLowerCase();
               card.style.cssText = !title.includes(filter.value.toLowerCase()) ? 'display:none' : 'display:block';
          })) : cards.forEach(card => card.style.display = 'block')

}

let handlerFilter = () => {
     let input;
     input = document.querySelector('.content__input');
     input.addEventListener('input', filterCard);
}

handlerFilter();
