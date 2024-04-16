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
  // Chuyển đổi object thành chuỗi query
  let searchString = `description:"${value}"`;

  try {
    const res = await request.get(
      `/products?limit=${perPage}&page=${page}&search=${searchString}`
    );

    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function createProduct({
  name,
  description,
  categoryId,
  descriptionDOM,
  options = [],
  images = [],
}) {
  try {
    const res = await request.post("/products", {
      name: name,
      description: description,
      categoryID: categoryId,
      htmlDomDescription: descriptionDOM,
      variantOptions: options,
      productImage: images,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}
