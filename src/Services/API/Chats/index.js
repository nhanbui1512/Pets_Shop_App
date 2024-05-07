import request from "../request";

export async function getConversations() {
  try {
    const res = await request.get("/conversations");
    return res.data;
  } catch (error) {
    throw error;
  }
}
