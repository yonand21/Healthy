import UrlParser from '../../routes/url-parser';
import ArtikelSource from '../../data/Artikel-source';
import { createArtikelDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="artikel-detail" class="artikel-detail"></div>
      
    `;
  },

  async afterRender() {

  },
};

export default Detail;
