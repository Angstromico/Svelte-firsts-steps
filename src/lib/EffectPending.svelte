<script lang="ts">
  let a = $state(1)
  let b = $state(2)

  async function add(a: number, b: number) {
    await new Promise((f) => setTimeout(f, 500)) // artificial delay
    return a + b
  }
</script>

<button onclick={() => a++}>a++</button>
<button onclick={() => b++}>b++</button>

<p>{a} + {b} = {await add(a, b)}</p>

{#if $effect.pending()}
  <p>pending promises: {$effect.pending()}</p>
{/if}
