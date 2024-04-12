import { useRef } from "react";
import Editor from "../../Components/Editor";
import Button from "@mui/material/Button";
function AddBlog() {
  const contentRef = useRef();

  return (
    <div className="container-fluid">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <div className="form-validation">
              <div className="form-valide">
                <Editor contentRef={contentRef} />

                <div className="form-group row">
                  <div className="col-lg-8 ml-auto">
                    <Button
                      onClick={() => {
                        console.log(contentRef.current.innerHTML);
                      }}
                      variant="contained"
                    >
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
export default AddBlog;
