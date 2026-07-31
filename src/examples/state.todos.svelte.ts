export let todos = $state([
  {
    done: false,
    text: 'add more todos',
  },
])

todos[0].done = !todos[0].done

todos.push({
  done: false,
  text: 'eat lunch',
})

let { done, text } = todos[0]

// this will not affect the value of `done`
todos[0].done = !todos[0].done
