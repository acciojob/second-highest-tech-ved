function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > max) {
      if (max !== num) {
        secondMax = max;
      }
      max = num;
    } 
    else if (num < max && num > secondMax) {
      secondMax = num;
    }
  }

  if (secondMax === -Infinity) {
    return -Infinity;
  }

  return secondMax;
}
