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
  try {
    const res = await request.get(`/feedbacks?breed_id=${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}
