function goods(array, item) {
  let low = 0;
  let high = array.length - 1;
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
  return low;
}

console.log(goods([5, 7, 9, 11, 13], 6)); // adds index[elem] at the correct place if it is not in array

function binarySearch(array, item) {
  let low = 0;
  let high = array.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2); // classic binary search
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
console.log(binarySearch([5, 7, 9, 11, 13], 11));
