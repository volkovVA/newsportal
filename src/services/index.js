export default class NewsService {
  apiBase = 'https://nodenews.herokuapp.com/';

  apiKey = 'apiKey=68ddc42d54f24b94909580a960855996';

  getResource = async (url) => {
    const res = await fetch(`${this.apiBase}${url}&${this.apiKey}`);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this.apiBase}${url}, received ${res.status}`
      );
    }
    return res.json();
  };

  getNews = async (url) => {
    const res = await this.getResource(`/top-headlines?country=us&category=${url}`);
    return res;
  };
}
