const GITHUB_BLOG_REPOSITORY_POSTS_URL = 'https://api.github.com/repos/TheodoreGC/blog/contents/posts';

export class BlogService {
  getAllPosts() {
    return this.getData(GITHUB_BLOG_REPOSITORY_POSTS_URL)
      .then(res => res.json())
      .then(posts => ({ count: posts.length, posts: posts.map(({ name }) => ({ name: name.replace('.md', ''), path: name }))}));
  }

  getPost(id = '') {
    return this.getData(`${GITHUB_BLOG_REPOSITORY_POSTS_URL}/${id}.md`, { headers: { 'Accept': 'application/vnd.github.v3.html' } })
      .then(res => res.text());
  }

  getData(url = '', options = {}) {
    return fetch(url, { method: 'GET', ...options });
  }
}
