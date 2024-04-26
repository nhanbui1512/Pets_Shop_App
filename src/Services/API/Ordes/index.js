import request from "../request";

export async function OrderItems({ items = [], total, phoneNumber, address }) {
  try {
    const res = await request.post("/orders", {
      phone: phoneNumber,
      address,
      items,
      total,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getOrders({ page, perPage }) {
  try {
    const res = await request.get(`/orders?limit=${perPage}&page=${page}`);
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
