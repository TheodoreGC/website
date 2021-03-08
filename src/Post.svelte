<script>
  import { onMount } from 'svelte';

  import { BlogService } from './services/blog-service';

  const blogService = new BlogService();

  export let id;

  let html = null;
  let error = null;

  onMount(async () => {
    blogService.getPost(id)
      .then(res => {
        html = res;
      })
      .catch(err => {
        error = err;
      });
  });
</script>

<style>
  .post-page-wrapper {
    flex: 1 0 auto;
  }
</style>

<div class="post-page-wrapper">
  {#if error !== null}
    {error}
  {:else}
    {@html html}
  {/if}
</div>
