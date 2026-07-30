<script lang="ts">
  let title = 'Hello Svelte!'
  const imgObj = {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmyybA__TCR0LdCBW4i1-aNK8KyqIAZpMUoYg-rZ1qA&s=10',
    alt: 'gif',
  }

  let lazy = false
  const color = 'orange'
</script>

<h1>{title}</h1>
<img {...imgObj} loading={lazy ? 'lazy' : null} />
<h2 style="color: {color}">Subtitle</h2>
<h2 style:color>Subtitle 2</h2>

<style lang="scss">
  h1 {
    color: #ff3e00;
    font-family: 'Arial', sans-serif;
  }
</style>
