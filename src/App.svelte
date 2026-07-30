<script lang="ts">
  let title = 'Hello Svelte!'
  const imgObj = {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmyybA__TCR0LdCBW4i1-aNK8KyqIAZpMUoYg-rZ1qA&s=10',
    alt: 'gif',
  }

  let lazy = false
</script>

<h1>{title}</h1>
<img {...imgObj} loading={lazy ? 'lazy' : null} />

<style lang="scss">
  h1 {
    color: #ff3e00;
    font-family: 'Arial', sans-serif;
  }
</style>
