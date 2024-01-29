function binarySearch(array, item, low, high) {
  let mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (array[mid] < item) {
      low = mid + 1;
    } else if (array[mid] > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function numInSubarray(array, n) {
  if (array.length < 1) {
    return -1;
  }
  let finalElem = array.length - 1;
  let border = 1;
  while (array[border] < n && border < finalElem) {
    border *= 2;
    if (array[border] == n) {
      return border;
    }
    if (border > finalElem) {
      border = finalElem;
    }
  }

  return binarySearch(array, n, border / 2, border);
}
console.log(numInSubarray([8, 11, 12, 16, 18, 21, 33, 36, 48, 54, 63], 16));

function numInSubarray2(array, n) {
  if (array.length < 1) {
    return -1;
  }
  let result = [];

  let finalElem = array.length - 1;
  let border = 1;
  while (array[border] < n && border < finalElem) {
    border *= 2;
    if (array[border] == n) {
      return border;
    }
    if (border > finalElem) {
      border = finalElem;
    }
  }
  return [border / 2, border];
}

console.log(numInSubarray2([8, 11, 12, 16, 18, 21, 33, 36, 48, 54, 63], 16));
