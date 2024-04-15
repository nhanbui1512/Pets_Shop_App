import axios from "axios";

const uploadFile = async (file) => {
  try {
    const formData = new FormData();

    formData.append(`file`, file);
    formData.append("upload_preset", "toiceaee");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dw6kncu63/image/upload",
      formData
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export default uploadFile;
