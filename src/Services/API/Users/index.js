import request from "../request";

export async function getUsers({ page, perPage }) {
  try {
    const res = await request.get(`/users?limit=${perPage}&page=${page}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteUser(id) {
  try {
    const res = await request.delete(`/users/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function changePassword(currentPass, newPass) {
  try {
    const res = await request.put("/users/changepass", {
      currentPass: currentPass,
      newPass: newPass,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}
