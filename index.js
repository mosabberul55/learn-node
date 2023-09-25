const people = require('./people')
const _ = require('lodash')

console.log(people.people)
console.log(people.add(people.a, people.b))
console.log(_.uniq([1, 2, 3, 4, 4, 4, 4, 4, 5, 6, 7]))