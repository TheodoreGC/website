const GITHUB_BLOG_REPOSITORY_PAGES_URL = 'https://api.github.com/repos/TheodoreGC/blog/contents/pages';

export class PageService {
  getAboutPageData() {
    return this.getData(`${GITHUB_BLOG_REPOSITORY_PAGES_URL}/about.md`, { headers: { 'Accept': 'application/vnd.github.v3.html' } })
      .then(res => res.text());
  }

  getData(url = '', options = {}) {
    return fetch(url, { method: 'GET', ...options });
  }
}
