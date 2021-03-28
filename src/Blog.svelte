<script>
  import { useFocus } from 'svelte-navigator';

  import { BlogService } from './services/blog-service';

  import List from './widgets/List.svelte';
  import ListItem from './widgets/ListItem.svelte';

  const registerFocus = useFocus();
  const blogService = new BlogService();

  let searchTerm = '';

  let start;
  let end;

  const blogPostRequest = blogService.getAllPosts();
</script>

<style>
  .container {
    margin: 2rem 0;
    min-height: 200px;
    flex: 1 0 auto;
  }

  .blog-list-search-box {
    background-color: transparent;
    color: var(--main-color);
    border: none;
    line-height: 1.5rem;
    border-bottom: 2px solid var(--highlight-color);
    width: fit-content;
  }

  .blog-list-information {
    display: flex;
    justify-content: space-between;
  }

  ::-webkit-input-placeholder {
    color: var(--main-color);
  }

  .blog-list-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>

<h1>Posts</h1>

<input bind:value={searchTerm} placeholder='Search' class='blog-list-search-box' />

<div class='container'>
  {#await blogPostRequest}
    <h1 class="blog-list-hidden" use:registerFocus>The blog posts are being loaded...</h1>
  {:then { posts, count }}
    <List items={posts.filter(post => post.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)} bind:start bind:end let:item>
      <ListItem {...item}/>
    </List>
    <div class="blog-list-information">
      <p>showing items {start}-{end}</p>
      <p>Total posts: {count}</p>
    </div>
  {/await}
</div>
