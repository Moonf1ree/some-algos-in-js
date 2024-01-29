// function merge(array, low, mid, high) {
//   let it1 = 0;
//   let it2 = 0;
//   let result = [];

//   while (low + it1 < mid && mid + it2 < high) {
//     if (array[low + it1] < array[mid + it2]) {
//       result[it1 + it2] = array[low + it1];
//       it1 += 1;
//     } else {
//       result[it1 + it2] = array[mid + it2];
//       it2 += 1;
//     }
//   }
//   while (low + it1 < mid) {
//     result[it1 + it2] = array[low + it1];
//     it1 += 1;
//   }
//   while (mid + it2 < high) {
//     result[it1 + it2] = array[mid + it2];
//     it2 += 1;
//   }
//   for (let i = 0; i < it1 + it2; i++) {
//     array[low + i] = result[i];
//   }
//   return array;
// }

// function mergeSort(a, n) {
//   for (let i = 1; i <= n; i *= 2) {
//     for (let j = 0; j + i < n; j += 2 * i) {
//       merge(a, j, j + i, Math.min(j + 2 * i, n));
//     }
//   }
//   return a;
// } // ЭТО ИТЕРАТИВНЫЙ MERGESORT!!! O(1) по памяти, O(N*LOG(N)) по времени

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex].year < right[rightIndex].year) {
      result.push(left[leftIndex++]);
    } else if (left[leftIndex].year > right[rightIndex].year) {
      result.push(right[rightIndex++]);
    } else {
      if (left[leftIndex].title < right[rightIndex].title) {
        result.push(left[leftIndex++]);
      } else {
        result.push(right[rightIndex++]);
      }
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right)); // рекурсивный, существуют затраты памяти в отличии от iterative
}

function sortBookData(n, array) {
  let books = array.map((book) => {
    let matches = book.match(/(\d{10})\s+"(.*)"\s+(\d{4})/);
    return {
      isbn: matches[1],
      title: matches[2],
      year: parseInt(matches[3]),
    };
  });
  console.log(books);
  return mergeSort(books);
}

console.log(
  sortBookData(3, [
    '1234567890 "Война и мир" 1869',
    '9876543210 "1984" 1949',
    '1111111111 "Сказка о рыбаке и рыбке" 1833',
  ])
);
