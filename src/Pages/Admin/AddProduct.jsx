import { useContext, useEffect, useRef, useState } from "react";
import InteractiveList from "../../Components/InteractiveList";
import Button from "@mui/material/Button";
import Editor from "../../Components/Editor";
import FilesManager from "../../Components/FilesManager";
import { createProduct } from "../../Services/API/Products";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { StorageContext } from "../../Contexts/StorageContext";

function AddProduct() {
  const [options, setOptions] = useState([]);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [imageFiles, setImageFiles] = useState([]);

  const contentRef = useRef();
  const categoryRef = useRef();

  const { categories } = useContext(StorageContext);

  const handleAddProduct = (e) => {
    const descriptionDOM = contentRef.current.innerHTML;
    const categoryId = categoryRef.current.value;

    createProduct({
      name: productName,
      images: imageFiles,
      description,
      categoryId,
      descriptionDOM,
      options,
    })
      .then((res) => {
        toast.success("Thêm sản phẩm thành công");
        setOptions([]);
        setImageFiles([]);
        setDescription("");
        setProductName("");
        contentRef.current.innerHTML = "Edit DOM";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {}, []);
  return (
    <div>
      <div className="row page-titles mx-0">
        <div className="col p-md-0">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">
              <Link to="/admin/addproduct">Add Product</Link>
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
                      Product Name <span className="text-danger">*</span>
                    </label>
                    <div className="col-lg-6">
                      <input
                        onChange={(e) => {
                          setProductName(e.target.value);
                        }}
                        value={productName}
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
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="val-confirm-password"
                        name="val-confirm-password"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      className="col-lg-4 col-form-label"
                      htmlFor="val-confirm-password"
                    >
                      Category <span className="text-danger">*</span>
                    </label>
                    <div className="col-lg-6">
                      <select ref={categoryRef}>
                        {categories.map((item, index) => {
                          return (
                            <option value={item._id} key={index}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-lg-4 col-form-label">
                      Options <span className="text-danger">*</span>
                    </label>
                    <div className="col-lg-6">
                      <InteractiveList
                        items={options}
                        setItems={setOptions}
                        onAddItem={(option) => {
                          setOptions((prev) => [
                            ...prev,
                            {
                              name: option.optionName,
                              price: option.price,
                              quantity: option.quantity,
                            },
                          ]);
                        }}
                        onDeleteOption={(index) => {
                          setOptions((prev) => {
                            const newState = [...prev];
                            newState.splice(index, 1);
                            return newState;
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      className="col-lg-4 col-form-label"
                      htmlFor="val-username"
                    >
                      Ảnh sản phẩm <span className="text-danger">*</span>
                    </label>
                    <div className="col-lg-6">
                      <FilesManager
                        imageFiles={imageFiles}
                        setImageFiles={setImageFiles}
                      />
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
    </div>
  );
}
export default AddProduct;
