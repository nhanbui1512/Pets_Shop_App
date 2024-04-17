export function formatDay(timeStr) {
  const dateObj = new Date(timeStr);

  const day = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0, nên cần cộng thêm 1
  const year = dateObj.getUTCFullYear();

  return `${day} tháng ${month} năm ${year}`;
}

export function formatFullTime(timeStr) {
  const dateObj = new Date(timeStr);
  // Trích xuất thông tin về thời gian, ngày, tháng và năm
  const hour = dateObj.getUTCHours();
  const minute = dateObj.getUTCMinutes();
  const second = dateObj.getUTCSeconds();
  // const millisecond = dateObj.getUTCMilliseconds();
  const day = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0, nên cần cộng thêm 1
  const year = dateObj.getUTCFullYear();

  return `${hour}:${minute}:${second} ${day} tháng ${month} năm ${year}`;
}
