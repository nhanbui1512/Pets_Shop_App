import axios from "axios";
const request = axios.create({
  baseURL: "https://vapi.vnappmob.com/api",
  headers: {
    Accept: "application/json, text/plain, */*",
  },
});

export async function getProvinces() {
  try {
    const res = await request.get("/province");
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getDistricts(province_id) {
  try {
    const res = await request.get(`/province/district/${province_id}`);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function getWards(district_id) {
  try {
    const res = await request.get(`/province/ward/${district_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}
