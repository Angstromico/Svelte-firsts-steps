<script lang="ts">
  import { Counter, Btn, Double, GetTotal } from './lib/index.svelte'
  import { Todo } from './examples/classes.svelte'

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
  let todo = new Todo('Learn Svelte')

  let counter = $state({ count: 0 })

  function onclick() {
    // Will log `{ count: ... }` rather than `Proxy { ... }`
    console.log($state.snapshot(counter))
  }
</script>

<h1 style="--color: {color}">{title}</h1>
<img {...imgObj} loading={lazy ? 'lazy' : null} />
<h2 style="color: {color}">Subtitle</h2>
<h2 style:color>Subtitle 2</h2>

<h3>{message}</h3>

<button onclick={greet}>click me</button>
<Counter />
{#if todo.text !== ''}
  <p>{todo.text}</p>
{/if}
<Btn text="reset" onClick={() => todo.reset()} />
<Btn text="Snapshop" onClick={onclick} />

<Double />
<GetTotal />

<style lang="scss">
  h1 {
    color: var(--color, #ff3e00);
    font-family: 'Arial', sans-serif;
  }
  button {
    font-size: 2em;
  }
</style>
