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
