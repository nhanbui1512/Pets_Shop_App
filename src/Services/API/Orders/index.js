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
  type = "nameUser",
}) {
  let searchString = `${type}:"${value}"`;

  try {
    const res = await request.get(
      `/orders?search=${searchString}&page=${page}&limit=${perPage}`
    );

    return res.data;
  } catch (error) {
    throw error;
  }
}
