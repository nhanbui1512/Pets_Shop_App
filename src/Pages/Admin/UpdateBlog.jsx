import { useEffect, useRef, useState } from "react";
import Editor from "../../Components/Editor";
import Button from "@mui/material/Button";
import { getBlogById } from "../../Services/API/Blogs";
// import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

function UpdateBlog() {
  const contentRef = useRef();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  const handleAddBlog = () => {
    // const DOMContent = contentRef.current.innerHTML;
  };

  useEffect(() => {
    getBlogById(id)
      .then((res) => {
        setTitle(res.title);
        setDescription(res.shortContent);
        contentRef.current.innerHTML = res.content;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container-fluid">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <div className="form-validation">
              <div className="form-valide">
                <div className="form-group row">
                  <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                  >
                    Title <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-6">
                    <input
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      value={title}
                      type="text"
                      className="form-control"
                      id="val-username"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-lg-4 col-form-label" htmlFor="val-desc">
                    Short Description <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-6">
                    <textarea
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      id="val-desc"
                    />
                  </div>
                </div>

                <Editor contentRef={contentRef} />

                <div className="form-group row">
                  <div className="col-lg-8 ml-auto">
                    <Button onClick={handleAddBlog} variant="contained">
                      Add News
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UpdateBlog;
