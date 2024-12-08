import { useRef, useState } from "react";
import Editor from "../../Components/Editor";
import Button from "@mui/material/Button";
import { createBlog } from "../../Services/API/Blogs";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import uploadFile from "../../Services/Cloudinary";

function AddBlog() {
  const contentRef = useRef();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState({});

  const handleAddBlog = () => {
    const DOMContent = contentRef.current.innerHTML;

    createBlog({
      title,
      shortContent: description,
      DOMContent,
      thumbNail: thumbnail,
    })
      .then((res) => {
        toast.success("Create Blog Successfully");
        contentRef.current.innerHTML = "";
        setDescription("");
        setTitle("");
      })
      .catch((err) => {
        toast.error("Create Blog Unsuccessfully");
      });
  };

  return (
    <div>
      <div className="row page-titles mx-0">
        <div className="col p-md-0">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/admin/addblog">Add Blog</Link>
            </li>
          </ol>
        </div>
      </div>
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
                    <label
                      className="col-lg-4 col-form-label"
                      htmlFor="val-desc"
                    >
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

                  <div className="form-group row">
                    <label
                      className="col-lg-4 col-form-label"
                      htmlFor="val-desc"
                    >
                      Thumbnail <span className="text-danger">*</span>
                    </label>
                    <div className="col-lg-6">
                      <input
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) => {
                          if (e.target.files.length > 0) {
                            const file = e.target.files[0];
                            const previewURL = URL.createObjectURL(file);
                            file.preview = previewURL;

                            uploadFile(file)
                              .then((res) => {
                                setThumbnail(res.data.secure_url);
                                toast.success("Upload ảnh thành công");
                              })
                              .catch((err) => {
                                toast.error("Upload ảnh không thành công");
                              });
                          }
                        }}
                        className="form-control"
                        id="val-desc"
                      />
                      {thumbnail && <img src={thumbnail} alt=""></img>}
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
    </div>
  );
}
export default AddBlog;
