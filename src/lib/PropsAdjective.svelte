<script lang="ts">
  interface Props {
    adjective?: string
  }

  let { adjective = 'amazing' }: Props = $props()
</script>

<p>this component is {adjective}</p>
