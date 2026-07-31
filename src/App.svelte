<script lang="ts">
  let title = 'Hello Svelte!'
  const imgObj = {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmyybA__TCR0LdCBW4i1-aNK8KyqIAZpMUoYg-rZ1qA&s=10',
    alt: 'gif',
  }

  let lazy = false
  const color = 'orange'

  function greet() {
    alert('Welcome to Svelte!')
  }

  let message = $state('Hello World!')
  let count = $state(0)
</script>

<h1 style="--color: {color}">{title}</h1>
<img {...imgObj} loading={lazy ? 'lazy' : null} />
<h2 style="color: {color}">Subtitle</h2>
<h2 style:color>Subtitle 2</h2>

<h3>{message}</h3>

<button onclick={greet}>click me</button>
<button onclick={() => count++}>
  clicks: {count}
</button>

<style lang="scss">
  h1 {
    color: var(--color, #ff3e00);
    font-family: 'Arial', sans-serif;
  }
  button {
    font-size: 2em;
  }
</style>
