import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchSearchResult } from './js/pixabay-api.js';
import { renderSearchCard } from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const searchQuery = event.target.elements.search.value.trim();

  if (!searchQuery) {
    iziToast.show({
      message: 'Введіть слово для пошуку!',
      position: 'topRight',
    });
    return;
  }

  fetchSearchResult(searchQuery).then(images => {
    if (images.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#FAFAFB',
        iconColor: '#FAFAFB',
      });
    } else {
      renderSearchCard(images);
    }
  });

  form.reset();
});
