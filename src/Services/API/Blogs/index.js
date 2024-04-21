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

export async function getBlogById(id) {
  try {
    const res = await request.get(`/blogs/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function updateBlog({
  id,
  title,
  content,
  thumbnail,
  shortContent,
}) {
  try {
    const res = await request.patch(`/blogs/${id}`, {
      title: title,
      content: content,
      shortContent: shortContent,
      thumbnail: thumbnail,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}
