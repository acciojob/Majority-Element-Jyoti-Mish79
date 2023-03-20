//your code here
function findMajorityElement(arr) {
  const n = arr.length;
  let count = 0;
  let candidate = null;

  for (let i = 0; i < n; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else {
      if (arr[i] === candidate) {
        count++;
      } else {
        count--;
      }
    }
  }

  // At this point, candidate is a potential majority element
  // Verify that it occurs more than n/2 times in the array
  count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }

  if (count > Math.floor(n / 2)) {
    return candidate;
  } else {
    // No majority element found
    return null;
  }
}

