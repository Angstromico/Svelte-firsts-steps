<script>
  let pathname = '/'
</script>

<nav>
  <a href="/" aria-current={$state.eager(pathname) === '/' ? 'page' : null}
    >home</a
  >
  <a
    href="/about"
    aria-current={$state.eager(pathname) === '/about' ? 'page' : null}>about</a
  >
</nav>
