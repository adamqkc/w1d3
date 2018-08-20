function countLetters(str) {
  var noSpace = str.split(' ').join('');
  var letters = {};

  for (var i = 0; i < noSpace.length; i++) {
    var strKey = noSpace[i];

    if (!letters.hasOwnProperty(strKey)) {
      letters[strKey] = 1;
    } else {
      letters[strKey]++;
    }

    // if (letters[strKey] === undefined) {
    //   letters[strKey] = 1;
    //   console.log(i);
    // } else {
    //   letters[strKey]++;
    // }
  }
  return letters;
}

console.log(countLetters("lighthouse in the house"));