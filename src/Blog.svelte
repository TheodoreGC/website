<script>
  import { onMount } from 'svelte';

  import { BlogService } from './services/blog-service';

  import List from './widgets/List.svelte';
  import ListItem from './widgets/ListItem.svelte';

  const blogService = new BlogService();

  let items = [];
  let totalCount = 0;
  let searchTerm = '';

  $: filteredList = items.filter(item => item.name.indexOf(searchTerm) !== -1);

  let start;
  let end;

  onMount(async () => {
    blogService.getAllPosts()
      .then(({ posts, count }) => {
        items = posts;
        totalCount = count;
      });
  });
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
</style>

<h1>Posts</h1>

<input bind:value={searchTerm} placeholder='Search' class='blog-list-search-box' />

<div class='container'>
  <List items={filteredList} bind:start bind:end let:item>
    <ListItem {...item}/>
  </List>
  <div class="blog-list-information">
    <p>showing items {start}-{end}</p>
    <p>Total posts: {totalCount}</p>
  </div>
</div>
