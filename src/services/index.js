export default class NewsService {
  apiBase = 'https://nodenews.herokuapp.com/';

  apiKey = 'apiKey=68ddc42d54f24b94909580a960855996';

  apiKey2 = 'apiKey=98ea975c67324ad9a3a54da6d117a14a';

  getResource = async (url) => {
    const result = await fetch(`${this.apiBase}${url}&${this.apiKey2}`);

    if (!result.ok) {
      throw new Error(
        `Could not fetch ${this.apiBase}${url}, received ${result.status}`
      );
    }
    return result.json();
  };

  getNews = async (url) => {
    const result = await this.getResource(`/top-headlines?country=us&category=${url}`);
    return result;
  };
}
