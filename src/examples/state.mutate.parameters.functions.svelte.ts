//Normal JavaScript keep values
function add(getA: () => number, getB: () => number) {
  return () => getA() + getB()
}

let a = 1
let b = 2
let total = add(
  () => a,
  () => b,
)
console.log(total()) // 3

a = 3
b = 4
console.log(total()) // 7

//Svelte way:
function addSvelte(input: { a: number; b: number }) {
  return {
    get value() {
      return input.a + input.b
    },
  }
}

let inputSvelte = $state({ a: 1, b: 2 })
let totalSvelte = addSvelte(inputSvelte)
console.log(totalSvelte.value) // 3

inputSvelte.a = 3
inputSvelte.b = 4
console.log(totalSvelte.value) // 7
