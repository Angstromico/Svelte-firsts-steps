<script>
  let { post, like } = $props()

  let likes = $derived(post.likes)

  async function onclick() {
    // increment the `likes` count immediately...
    likes += 1

    // and tell the server, which will eventually update `post`
    try {
      await like()
    } catch {
      // failed! roll back the change
      likes -= 1
    }
  }
</script>

<button {onclick}>🧡 {likes}</button>
