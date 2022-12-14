function arrays(arr) {
  const first = arr[0];
  const last = arr[arr.length - 1];
  return first + " " + last;
}

function compareArrays(arr, arr2) {
  if (arr.length > arr2.length) {
    return arr;
  } else if (arr.length < arr2.length) {
    return arr2;
  } else {
    return "Error";
  }
}

function stringToArray(words) {
  const alphabet = words.split(",");
  return alphabet;
}

function arrayToString(alphabet) {
  const words = alphabet.slice(",");
  return words;
}

export { arrays, compareArrays, stringToArray, arrayToString };
