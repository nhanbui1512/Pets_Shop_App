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
      "https://456c-2405-4802-6059-1030-422-fb86-ac68-c59a.ngrok-free.app/api/prediction",
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
