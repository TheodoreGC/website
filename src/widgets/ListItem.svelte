<script>
  import { link, useResolve } from 'svelte-navigator';

  const resolve = useResolve();

  export let name;

  const resolvedLink = resolve(`posts/${name}`);
</script>

<style>
  .card {
    position: relative;
    margin: 0.5em;
    border-bottom: 1px solid var(--secondary-color);
  }

  .card::after {
    clear: both;
    display: block;
  }

  .card-title {
    margin: 0 0 0.5em 0;
    font-weight: lighter;
  }
</style>

<div class='card'>
  <a href="{resolvedLink}" use:link>
    <h2 class='card-title'>{name}</h2>
  </a>
</div>
