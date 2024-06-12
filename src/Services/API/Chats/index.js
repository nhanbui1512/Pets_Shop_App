import request from "../request";

export async function getConversations() {
  try {
    const res = await request.get("/conversations");
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getMessages(socketId) {
  try {
    const res = await request.get(`/conversations/${socketId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteConversation(id) {
  try {
    const res = await request.delete(`/conversations/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}
