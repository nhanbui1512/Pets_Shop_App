import request from "../request";

export async function getBreeds({ page, perPage }) {
  try {
    const res = await request.get(`/breeds?per_page=${perPage}&page=${page}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

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

export async function updateBreed({
  id,
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
    const res = await request.patch(`/breeds/${id}`, {
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

export async function getBreedById(id) {
  try {
    const res = await request.get(`/breeds/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}
