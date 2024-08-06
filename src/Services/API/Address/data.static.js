import data from "./data.json";

export function getProvinces() {
  try {
    return data.provinces;
  } catch (error) {
    throw error;
  }
}

export function getDistricts(province_id) {
  try {
    const districts = data.districts.filter(
      (dis) => dis.province_id === province_id
    );
    return districts;
  } catch (err) {
    throw err;
  }
}

export function getWards(district_id) {
  try {
    const wards = data.wards.filter((ward) => ward.district_id === district_id);
    return wards;
  } catch (error) {
    throw error;
  }
}
