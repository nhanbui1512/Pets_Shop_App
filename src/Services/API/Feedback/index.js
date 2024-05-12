import request from "./request";

export async function feedBackPredict({
  userId,
  feedback,
  links,
  feedbackNumber,
  cardBreedsId,
}) {
  try {
    const res = await request.post(`/feedbacks`, {
      userId,
      feedback,
      links,
      feedbackNumber,
      cardBreedsId,
    });
  } catch (error) {
    throw error;
  }
}
