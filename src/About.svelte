<script>
  import { onMount } from 'svelte';

  import { PageService } from './services/page-service';

  const pageService = new PageService();

  let html = null;
  let error = null;

  onMount(async () => {
    pageService.getAboutPageData()
      .then(res => {
        html = res;
      })
      .catch(err => {
        error = err;
      });
  });
</script>

<style>
  .about-page-wrapper {
    flex: 1 0 auto;
  }
</style>

<div class="about-page-wrapper">
  {#if error !== null}
    {error}
  {:else}
    {@html html}
  {/if}
</div>
