// TODO: Write your function in this file

function fizzbuzz(lower, upper) {
  const fizzbuzzArray = []
  for (i = lower; i <= Number(upper); i++) {
    let fizzbuzz = ''
    if (i % 3 === 0) {
      fizzbuzz += 'Fizz'
    }
    if (i % 5 === 0) {
      fizzbuzz += 'Buzz'
    }
    fizzbuzzArray.push(fizzbuzz || i)
  }
  return fizzbuzzArray
}

// TODO: Change undefined below to the name of your function
module.exports = fizzbuzz
