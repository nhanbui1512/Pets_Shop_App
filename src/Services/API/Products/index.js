import request from "../request";

export async function getProducts({ page, perPage }) {
  try {
    const res = await request.get(`/products?per_page=${perPage}&page=${page}`);
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

export async function searchProduct({ page = 1, perPage = 10, search = "" }) {
  try {
    const res = await request.get(
      `/products?per_page=${perPage}&page=${page}&search=${search}`
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

export async function updateProduct({
  id,
  name,
  description,
  categoryID,
  htmlDomDescription,
  productImages = [],
}) {
  try {
    const res = await request.patch(`products/${id}`, {
      name: name,
      description: description,
      categoryID: categoryID,
      htmlDomDescription: htmlDomDescription,
      productImage: productImages,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function updateOption({ id, name, value, price, quantity }) {
  try {
    const res = await request.put(`/variant-options/${id}`, {
      variantOptions: [
        {
          name: name,
          value: value,
          price: price,
          quantity: quantity,
        },
      ],
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function createOption({
  idProduct,
  name,
  value,
  price,
  quantity,
}) {
  try {
    const res = await request.post(`/products/${idProduct}/variant-options`, {
      name: name,
      value: value,
      price: price,
      quantity: quantity,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteOption(id) {
  try {
    const res = await request.delete(`/variant-options/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteProduct(id) {
  try {
    const res = await request.delete(`/products/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getProductsByCategory({ id, page = 1, perPage = 20 }) {
  const response = await request.get(
    `/products/category/${id}?&page=${page}&per_page=${perPage}`
  );
  return response?.data;
}
