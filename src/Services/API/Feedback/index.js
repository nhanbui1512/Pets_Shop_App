import request from "../request";

export async function feedBackPredict({
  feedback,
  links,
  feedbackNumber,
  cardBreedsId,
}) {
  try {
    const res = await request.post(`/feedbacks`, {
      feedback,
      links,
      feedbackNumber,
      cardBreedsId,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getFeedbacksByBreed(id) {
  let path = `/feedbacks?breed_id=${id}`;
  if (!id) path = "/feedbacks";

  try {
    const res = await request.get(path);
    return res.data;
  } catch (error) {
    throw error;
  }
}
