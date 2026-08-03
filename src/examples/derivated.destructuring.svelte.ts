function stuff() {
  return { a: 1, b: 2, c: 3 }
}

let { a, b, c } = $derived(stuff())
