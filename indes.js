function isValidSubsequence(array, sequence) {
  // Write your code here.
  let j=0
  for(i=0; i<array.length; i++)
  {
    if(sequence[j]===array[i])
    {
      j++
    }
  }
  if(j===sequence.length)
  {
    console.log(true)
  }
  else
  {
    console.log(false)
  }
}
// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
