<script lang="ts">
  let {
    text,
    onClick = () => {},
  }: {
    text: string
    onClick?: () => void
  } = $props()
</script>

<button onclick={onClick}>
  {text}
</button>
