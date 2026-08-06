<script>
  const destroy = $effect.root(() => {
    $effect(() => {
      // setup
    })

    return () => {
      // cleanup
    }
  })

  // later...
  destroy()
</script>
