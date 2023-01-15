module.exports = function reverse (n) {
  const reverseNumInArr = []
  numInArr = n.toString().split('')
  for (let i = numInArr.length -1; i >= 0; i--) {
    reverseNumInArr.push(numInArr[i])
  }

  return parseInt(reverseNumInArr.join(''))
}
