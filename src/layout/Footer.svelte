<script>
  import Icon from 'svelte-awesome';
  import { linkedin, github, envelope } from 'svelte-awesome/icons';
</script>

<style>
  .website-footer {
    flex-shrink: 0;
    align-self: center;
    font-size: 0.8rem;
    margin: 2rem 0;
  }

  .website-media-list {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .website-media-list-item-link {
    padding: 12px;
    color: white;
  }

  .website-media-list-item-link:hover {
    color: var(--highlight-color);
  }

  .website-footer-copyright {
    font-size: 0.8rem;
  }
</style>

<footer class='website-footer'>
  <slot></slot>
  <ul class="website-media-list">
    <li class="website-media-list-item">
      <a href="https://www.linkedin.com/in/theodoregarsoncorbeaux/" target="_blank" class="website-media-list-item-link">
        <Icon data={linkedin} scale="1.5"/>
      </a>
    </li>
    <li class="website-media-list-item">
      <a href="https://github.com/TheodoreGC" target="_blank" class="website-media-list-item-link">
        <Icon data={github} scale="1.5"/>
      </a>
    </li>
    <li class="website-media-list-item">
      <a href="mailto:theodore.corbeaux@gmail.com" target="_blank" class="website-media-list-item-link">
        <Icon data={envelope} scale="1.5"/>
      </a>
    </li>
  </ul>
  <div class="website-footer-copyright">
    &copy; Copyright 2021 Theodore Garson
  </div>
</footer>
