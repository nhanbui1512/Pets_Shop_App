import request from "../request";

export async function getAllCategories() {
  try {
    const res = await request.get("/categories");
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getCategoryById({ id, page, perPage }) {
  try {
    const res = await request.get(
      `/categories/${id}?limit=${perPage}&page=${page}`
    );

    return res.data;
  } catch (error) {
    throw error;
  }
}
