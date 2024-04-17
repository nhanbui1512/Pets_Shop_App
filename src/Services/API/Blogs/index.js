import request from "../request";
export async function createBlog({ title, DOMContent, shortContent }) {
  try {
    const res = await request.post("/blogs", {
      title,
      content: DOMContent,
      shortContent,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getBlogs({ page, perPage }) {
  try {
    const res = await request.get(`/blogs?limit=${perPage}&page=${page}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}
