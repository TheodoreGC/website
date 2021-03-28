<script>
  import { useFocus } from 'svelte-navigator';

  import { PageService } from './services/page-service';

  const registerFocus = useFocus();
  const pageService = new PageService();

  const aboutPageRequest = pageService.getAboutPageData();
</script>

<style>
  .about-page-wrapper {
    flex: 1 0 auto;
  }

  .about-page-hidden {
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

<div class="about-page-wrapper">
  {#await aboutPageRequest}
    <h1 class="about-page-hidden" use:registerFocus>The about page is being loaded...</h1>
  {:then html}
    {@html html}
  {:catch error}
    {error}
  {/await}
</div>
