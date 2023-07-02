import CONFIG from '../../globals/config';

const createArtikelItemTemplate = (artikel) => `
<div class="artikel-item" id="reveal">
<div class="artikel-item-header">
<img id="artikel-item-header-poster" alt="${artikel.id}" 
src="${artikel.img}">
</div>
<div class="artikel-item-content">
  <h2 id="artikel-title"><a href="${artikel.id}" role="button">${artikel.title}</a></h2>
  <p>${artikel.overview}</p>
</div>
</div>
`;

const createArtikelDetailTemplate = (artikel) => `
  <div class="detail">
    <h1 tabindex="0" class="title" id="resto-title">
      ${artikel.id}
    </h1>
    <img class="lazyload" id="resto-item-header-poster" alt="${artikel.title}"
    data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" crossorigin="anonymous">
    <div class="info">
      <h2 tabindex="0">Information</h2>
    </div>

    <div class="overview">
      <h2 tabindex="0">Overview</h2>
      <p>${artikel.overview}</p>
    </div>

  </div>
`;

export {
  createArtikelItemTemplate,
  createArtikelDetailTemplate,
};
