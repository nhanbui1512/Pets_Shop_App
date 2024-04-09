import request from "../request";

export async function getAllCategories() {
  try {
    const res = await request.get("/categories");
    return res.data;
  } catch (error) {
    throw error;
  }
}
