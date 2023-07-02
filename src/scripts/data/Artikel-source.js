import API_ENDPOINT from '../globals/api-endpoint';

class ArtikelSource {
  static async getArtikel() {
    const response = await fetch(API_ENDPOINT.ARTIKEL);
    const responseJson = await response.json();

    return responseJson.data.artikel;
  }

  static async detailArtikel(id) {
    const response = await fetch(API_ENDPOINT.ARTIKEL_DETAIL(id));
    const responseJson = await response.json();

    return responseJson.data.artikel;
  }
}

export default ArtikelSource;
