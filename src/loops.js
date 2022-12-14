function forLoop(b) {
  let setArr = [];
  for (let i = 0; i < b.length; i++) {
    setArr[i];
    setArr.push(i);
  }
  return setArr;
}

function indexOfAlphabetsArray(a, c) {
  let alphaArr = [];
  for (let i = 0; i < a.length; i++) {
    alphaArr.push(`${a[i]} ${c[i]}`);
  }
  return alphaArr;
}

export { forLoop, indexOfAlphabetsArray };
