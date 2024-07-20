import axios from "axios";

export async function predictBreed({ url, file }) {
  // Tạo FormData object
  const formData = new FormData();
  // Thêm file vào formData

  if (file) formData.append("file", file);
  if (url) formData.append("file_url", url);
  try {
    // Gửi yêu cầu POST đến server để upload hình ảnh
    const response = await axios.post(
      "http://127.0.0.1:8000/api/prediction",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
