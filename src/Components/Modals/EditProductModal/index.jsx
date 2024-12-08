import { Button, Dialog, DialogTitle } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { StorageContext } from "../../../Contexts/StorageContext";
import InteractiveList from "../../InteractiveList";
import FilesManager from "../../FilesManager";

export default function EditProductModal({
  open = false,
  handleClose = () => {},
  data,
}) {
  const [options, setOptions] = useState([]);
  const [productName, setProductName] = useState(data?.name || "");
  const [description, setDescription] = useState(data?.shortDescription || "");
  const [imageFiles, setImageFiles] = useState([]);

  const categoryRef = useRef();

  const { categories } = useContext(StorageContext);

  useEffect(() => {
    const images = data?.product_images?.map((item) => item.fileUrl) || [];
    setProductName(data.name);
    setImageFiles(images);
    setDescription(data.shortDescription);
    setOptions(data?.options);
  }, [data]);
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            maxWidth: 1000,
            width: 1000,
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Edit product"}</DialogTitle>
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="">
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

                    <div className="form-group row">
                      <div className="col-lg-8 ml-auto gap-2 flex">
                        <Button onClick={handleClose} variant="outlined">
                          Cancel
                        </Button>
                        <Button variant="contained">Update</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
