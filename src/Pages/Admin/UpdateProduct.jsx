import { Fragment, useEffect, useRef, useState } from "react";
import InteractiveList from "../../Components/InteractiveList";
import Button from "@mui/material/Button";
import Editor from "../../Components/Editor";
import { getAllCategories } from "../../Services/API/Category";
import FilesManager from "../../Components/FilesManager";
import {
  createOption as CreateOption,
  deleteOption as deleteOptionAPI,
  getProductById,
  updateProduct,
} from "../../Services/API/Products";

import { Link, useParams } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { toast } from "react-toastify";

function UpdateProduct() {
  const { id } = useParams();

  const [options, setOptions] = useState([]);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  const [deleteOption, setDeleteOption] = useState(-1);

  const contentRef = useRef();

  const handleDelete = () => {
    deleteOptionAPI(options[deleteOption]._id)
      .then((res) => {
        toast.success("Xóa lựa chọn thành công");
        setOptions((prev) => {
          const newState = [...prev];
          newState.splice(deleteOption, 1);
          return newState;
        });
        setDeleteOption(-1);
      })
      .catch((err) => {
        toast.error("Xóa lựa chọn thất bại");
      });
  };
  const handleClose = () => {
    setDeleteOption(-1);
  };

  const handleUpdate = (e) => {
    const DOMcontent = contentRef.current.innerHTML;
    updateProduct({
      id,
      name: productName,
      description: description,
      categoryID: categoryId,
      htmlDomDescription: DOMcontent,
      productImages: imageFiles,
    })
      .then((res) => {
        toast.success("Cập nhật sản phẩm thành công");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Cập nhật sản phẩm thất bại");
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
    <div>
      <div className="row page-titles mx-0">
        <div className="col p-md-0">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/admin/products">List Product</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/admin/products/${id}`}>{productName}</Link>
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
                      <select
                        onChange={(e) => {
                          setCategoryId(e.target.value);
                        }}
                        value={categoryId}
                      >
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
                        canUpdate
                        items={options}
                        setItems={setOptions}
                        onDeleteOption={(index) => {
                          setDeleteOption(index);
                        }}
                        onAddItem={(option) => {
                          CreateOption({
                            idProduct: id,
                            name: option.optionName,
                            value: option.optionName,
                            price: option.price,
                            quantity: option.quantity,
                          })
                            .then((res) => {
                              setOptions(res.variantOptions);
                            })
                            .catch((err) => {
                              console.log(err);
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
                      <Button onClick={handleUpdate} variant="contained">
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Fragment>
          <Dialog
            open={deleteOption !== -1}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Do you want delete this option?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                The data will be deleted and cannot be restored.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleDelete} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      </div>
    </div>
  );
}
export default UpdateProduct;
