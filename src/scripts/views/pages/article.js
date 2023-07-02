import RestaurantSource from "../../data/Artikel-source";
import { createArtikelItemTemplate } from "../templates/template-creator";

const Article = {
  async render() {
    return `
    <div class="artikeltag">
    <h2>HEALTHYLIFE Article</h2>
    </div>  
    <div class="contentArtikel">
      <div id="artikel-list" class="artikel-list"></div>
    </div>`;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getArtikel();
    const restaurantsContainer = document.querySelector('#artikel-list');
    restaurants.forEach((artikel) => {
      restaurantsContainer.innerHTML += createArtikelItemTemplate(artikel);
    });
  },
};

export default Article;
