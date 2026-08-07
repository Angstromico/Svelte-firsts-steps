<script lang="ts">
  interface Props {
    adjective?: string
  }

  let { adjective: qualifier = 'amazing' }: Props = $props()
</script>

<p>this component is {qualifier}</p>
