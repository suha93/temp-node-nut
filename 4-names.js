//local
// modules allow us to split our code and run with 2 differetn file.
//localy visible only
const secret = 'Super secret'
//these are globa, shareable object
const john = 'john'
const pete = 'pete'

module.exports = {john, pete} //through export,we are defining sharable variable
