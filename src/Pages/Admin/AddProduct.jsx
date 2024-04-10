import { useRef, useState } from "react";
import InteractiveList from "../../Components/InteractiveList";
import Button from "@mui/material/Button";
import Editor from "../../Components/Editor";
function AddProduct() {
  const [options, setOptions] = useState([]);
  const contentRef = useRef();

  const handleAddProduct = (e) => {
    console.log(contentRef.current.innerHTML);
  };
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
                    Product Name <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      id="val-username"
                      name="val-username"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-confirm-password"
                  >
                    Descriptions <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      id="val-confirm-password"
                      name="val-confirm-password"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-lg-4 col-form-label">
                    Options <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-6">
                    <InteractiveList items={options} setItems={setOptions} />
                  </div>
                </div>

                <Editor contentRef={contentRef} />

                <div className="form-group row">
                  <div className="col-lg-8 ml-auto">
                    <Button onClick={handleAddProduct} variant="contained">
                      Add Product
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
export default AddProduct;
