export function renderSearchCard(images) {
  if (!images.length) return;

  const gallery = document.querySelector('.gallery');

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="galleryCard">
          <a href="${largeImageURL}" >
            <img class="img" src="${webformatURL}" alt="${tags}" >
          </a>
          <ul class="attributesList">
            <li class="attributesItem"><span class="attributesLabel">Likes</span><br>${likes}</li>
            <li class="attributesItem"><span class="attributesLabel">Views</span><br>${views}</li>
            <li class="attributesItem"><span class="attributesLabel">Comments</span><br>${comments}</li>
            <li class="attributesItem"><span class="attributesLabel">Downloads</span><br>${downloads}</li>
          </ul>
        </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
