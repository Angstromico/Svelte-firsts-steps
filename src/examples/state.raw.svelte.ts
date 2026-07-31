let person = $state.raw({
  name: 'Heraclitus',
  age: 49,
})

// this will have no effect
person.age += 1

// this will work, because we're creating a new person
person = {
  name: 'Heraclitus',
  age: 50,
}
