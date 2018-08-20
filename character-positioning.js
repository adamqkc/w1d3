function countLetters(str) {
  var noSpace = str.split(' ').join('');
  var letters = {};

  for (var i = 0; i < noSpace.length; i++) {
    var strKey = noSpace[i];

    if (!letters.hasOwnProperty(strKey)) {
      letters[strKey] = i.toString();
    } else {
      letters[strKey] += ' , ' + i.toString();
    }
  }
  return letters;
}

console.log(countLetters("lighthouse in the house"));