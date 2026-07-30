<script lang="ts">
  let title = "Hello Svelte!";
  const source = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmyybA__TCR0LdCBW4i1-aNK8KyqIAZpMUoYg-rZ1qA&s=10";
  const alt = 'gif'
</script>

<h1>{title}</h1>
<img src={source} alt={alt} />

<style lang="scss">
  h1 {
    color: #ff3e00;
    font-family: 'Arial', sans-serif;
  }
</style>
