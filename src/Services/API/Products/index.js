import request from "../request";

export async function getProducts({ page, perPage }) {
  try {
    const res = await request.get(`/products?limit=${perPage}&page=${page}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getProductById(id) {
  try {
    const res = await request.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function searchProduct({ page = 1, perPage = 10, value = "" }) {
  try {
    const res = await request.get(
      `/products?limit=${perPage}&page=${page}&search=${value}`
    );

    return res.data;
  } catch (error) {
    throw error;
  }
}
