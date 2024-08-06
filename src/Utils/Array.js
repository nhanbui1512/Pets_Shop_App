export const binarySearch = (arr, key, targetValue) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    let currentValue =
      typeof arr[middle] === "object" && arr[middle] !== null
        ? arr[middle][key]
        : arr[middle];
    if (currentValue === targetValue)
      return { index: middle, value: arr[middle] };
    if (targetValue < currentValue) right = middle - 1;
    else left = middle + 1;
  }
  return undefined;
};
