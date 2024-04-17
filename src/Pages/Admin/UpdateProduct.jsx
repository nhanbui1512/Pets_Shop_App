import { useEffect, useRef, useState } from "react";
import InteractiveList from "../../Components/InteractiveList";
import Button from "@mui/material/Button";
import Editor from "../../Components/Editor";
import { getAllCategories } from "../../Services/API/Category";
import FilesManager from "../../Components/FilesManager";
import { createProduct, getProductById } from "../../Services/API/Products";

import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

function UpdateProduct() {
  const { id } = useParams();

  const [options, setOptions] = useState([]);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  const contentRef = useRef();
  const categoryRef = useRef();

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

  useEffect(() => {
    getProductById(id).then((res) => {
      setImageFiles(res.productImage);
      setProductName(res.name);
      setDescription(res.description);
      setOptions(res.variantOptions);
      setCategoryId(res.categoryID[0]);
      contentRef.current.innerHTML =
        res.htmlDomDescription ||
        "Click on Edite button and change the text then save it.";
    });

    getAllCategories()
      .then((res) => {
        setCategories(res);
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
                    <textarea
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
                          <option
                            selected={item._id === categoryId}
                            value={item._id}
                            key={index}
                          >
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
                    <InteractiveList items={options} setItems={setOptions} />
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
  );
}
export default UpdateProduct;
