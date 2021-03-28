<script>
  import { useFocus } from 'svelte-navigator';

  import { BlogService } from './services/blog-service';

  const registerFocus = useFocus();
  const blogService = new BlogService();

  export let id;

  const blogPostRequest = blogService.getPost(id);
</script>

<style>
  .post-page-wrapper {
    flex: 1 0 auto;
  }

  .post-hidden {
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

<div class="post-page-wrapper">
  {#await blogPostRequest}
    <h1 class="post-hidden" use:registerFocus>The blog post is being loaded...</h1>
  {:then html}
    {@html html}
  {:catch error}
    {error}
  {/await}
</div>
