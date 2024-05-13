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
