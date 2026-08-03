<script lang="ts">
  import { tick } from 'svelte'

  let div: HTMLDivElement | null = $state(null)
  let messages: string[] = $state([])

  $effect.pre(() => {
    if (!div) return // not yet mounted

    // reference `messages` array length so that this code re-runs whenever it changes
    messages.length

    // autoscroll when new messages are added
    if (div.offsetHeight + div.scrollTop > div.scrollHeight - 20) {
      tick().then(() => {
        div!.scrollTo(0, div!.scrollHeight)
      })
    }
  })
</script>

<div bind:this={div}>
  {#each messages as message}
    <p>{message}</p>
  {/each}
</div>
