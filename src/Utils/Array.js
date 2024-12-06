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

export const getPaginatedArray = (arr, page, limit) => {
  if (!Array.isArray(arr)) return;
  if (page <= 0 || limit <= 0) return [];
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  // Nếu endIndex nằm ngoài mảng thì slice sẽ lấy từ startIndex đến cuối mảng
  return arr.slice(startIndex, endIndex);
};
