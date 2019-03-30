// word count funtion
function wordCount(array) {
  // instantiate the object to hold the counted words
  var count = {};
  // loop through the array of text
  for (var i = 0; i < array.length; i++) {
    // ignores numbers
    if (isNaN(array[i])) {
      // for each word, if the count object has a key with that value, add 1 to the
      // value of the key
      if (count.hasOwnProperty(array[i])) {
        count[array[i]] += 1;
      } else {
        // if the count object doesn't hold that word as a key, it's value pair is 1
        count[array[i]] = 1;
      }
    }
  }
  return count;
}

exports.wordCount = wordCount;
