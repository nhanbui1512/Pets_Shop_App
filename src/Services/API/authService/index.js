import request from "../request";

export async function Login(email, password) {
  try {
    const res = await request.post("/auth/login", {
      email: email,
      password: password,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function Register({ firstName, lastName, email, password }) {
  try {
    const res = await request.post("/auth/register", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getMyProfile() {
  try {
    const res = await request.get("/auth/me");
    return res.data;
  } catch (error) {
    throw error;
  }
}
