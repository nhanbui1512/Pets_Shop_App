import request from "../request";

export async function addBreed({
  breed_name,
  appearance,
  behavior,
  common_health_issues,
  diet = [],
  breedImages = [],
  description,
  htmlDomDescription,
}) {
  try {
    const res = await request.post("/breeds", {
      breed_name,
      appearance,
      behavior,
      common_health_issues,
      diet,
      breedImages,
      description,
      htmlDomDescription,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}
