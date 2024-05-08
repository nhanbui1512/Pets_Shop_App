import request from "../request";

export async function OrderItems({
  items = [],
  total,
  phoneNumber,
  address,
  userName,
}) {
  try {
    const res = await request.post("/orders", {
      phone: phoneNumber,
      address,
      items,
      total,
      nameUser: userName,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getOrders({ page, perPage }) {
  try {
    let searchString = `status:"PENDING"`;
    const res = await request.get(
      `/orders?limit=${perPage}&page=${page}&search=${searchString}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteOrder(id) {
  try {
    const res = await request.delete(`/orders/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getOrderById(id) {
  try {
    const res = await request.get(`/orders/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function searchOrder({
  value,
  page,
  perPage = 10,
  type = "phone",
}) {
  let searchString = `${type}:"${value}"`;

  var queryString =
    type === "phone"
      ? `/orders?search=${searchString}&page=${page}&limit=${perPage}`
      : `/orders?nameUser=${value}&page=${page}&limit=${perPage}`;

  try {
    const res = await request.get(queryString);

    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getBills({ page, perPage }) {
  try {
    let searchString = `status:"CONFIRMED"`;
    const res = await request.get(
      `/orders?limit=${perPage}&page=${page}&search=${searchString}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function confirmOrder(id) {
  try {
    const res = await request.post(`/orders/${id}/confirm`, {
      status: "CONFIRMED",
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}
