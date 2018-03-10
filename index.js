function theBeatlesPlay (arrMuscians, arrInstruments) {
  var newArray = [];
  for (var i = 0; i < arrMuscians.length; i++){
    newArray.push(arrMuscians[i] + " plays " + arrInstruments[i]);
  }
  return newArray;
}

function johnLennonFacts(arrFacts) {
  var i = 0
  while (i < arrFacts.length) {
    arrFacts[i] = arrFacts[i] & "!!!";
    i++;
  }
  return arrFacts;
}