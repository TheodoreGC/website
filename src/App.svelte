<!-- App.svelte -->
<script>
  import { Router, Link, Route } from 'svelte-navigator';

  // Layout elements
  import Navigation from './layout/Navigation.svelte';
  import Main from './layout/Main.svelte';
  import Footer from './layout/Footer.svelte';

  // Pages
  import Home from './Home.svelte';
  import About from './About.svelte';
  import Blog from './Blog.svelte';
  import Post from './Post.svelte';
</script>

<style>
  .website-navigation-home {
    flex: 1 0 auto;
  }

  .website-navigation-pages {
    flex: 1 0 auto;
    text-align: end;
  }
</style>

<Router>
  <Navigation>
    <div class='website-navigation-home'>
      <Link to='/' class='website-navigation-link'>Home</Link>
    </div>
    <div class='website-navigation-pages'>
      <Link to='about' class='website-navigation-link'>About</Link> |
      <Link to='blog' class='website-navigation-link'>Blog</Link>
    </div>
  </Navigation>
  <Main>
    <Route path='/' component={Home}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/blog' component={Blog}></Route>
    <Route path='/blog/posts/:id' let:params>
      <Post id={params.id} />
    </Route>
    <Footer></Footer>
  </Main>
</Router>
