import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import classNames from "classnames/bind";
import styles from "./InteractiveList.module.scss";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

import { toast } from "react-toastify";
import { Dialog, Paper, TextField } from "@mui/material";
import { updateOption } from "../../Services/API/Products";

const cx = classNames.bind(styles);

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList({
  items = [],
  setItems,
  onDeleteOption,
  onAddItem,
  canUpdate = false,
}) {
  const [optionName, setOptionName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [edit, setEdit] = useState(-1);

  // Hàm xử lý khi nút xóa được nhấn
  const handleDelete = (optionId) => {
    // Gọi callback từ component cha và truyền ID của option
    if (onDeleteOption) onDeleteOption(optionId);
  };

  const handleAddItem = () => {
    if (onAddItem) onAddItem({ optionName, price, quantity });
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid>
        <Grid item xs={12} md={6}>
          <Demo>
            <List
              sx={{
                backgroundColor: "#E5EAF2",
                borderRadius: 1,
              }}
              dense
            >
              {items.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    secondaryAction={
                      <>
                        {canUpdate && (
                          <IconButton
                            onClick={() => {
                              setEdit(item);
                            }}
                            edge="end"
                            aria-label="delete"
                          >
                            <EditIcon />
                          </IconButton>
                        )}

                        <IconButton
                          onClick={() => handleDelete(index)}
                          edge="end"
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.optionName}
                      secondary={`${item.price}đ`}
                    />
                    <ListItemText primary={`${item.quantity} sản phẩm`} />
                  </ListItem>
                );
              })}

              {canUpdate && (
                <Dialog open={edit !== -1 ? true : false}>
                  <Paper sx={{ padding: 2 }} elevation={20}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                        width: 300,
                        height: 300,
                      }}
                    >
                      <TextField
                        value={edit?.name}
                        onChange={(e) => {
                          setEdit((prev) => {
                            const newSate = { ...prev };
                            newSate.name = e.target.value;
                            return newSate;
                          });
                        }}
                        sx={{
                          width: "100%",
                        }}
                        className={cx("text-input")}
                        variant="outlined"
                        inputProps={{
                          style: {
                            padding: "20px 16px",
                          },
                        }}
                      />

                      <TextField
                        onChange={(e) => {
                          setEdit((prev) => {
                            const newSate = { ...prev };
                            newSate.price = e.target.value;
                            return newSate;
                          });
                        }}
                        value={edit?.price}
                        sx={{
                          width: "100%",
                        }}
                        className={cx("text-input")}
                        variant="outlined"
                        inputProps={{
                          type: "number",
                        }}
                      />
                      <TextField
                        value={edit?.quantity}
                        onChange={(e) => {
                          setEdit((prev) => {
                            const newSate = { ...prev };
                            newSate.quantity = e.target.value;
                            return newSate;
                          });
                        }}
                        sx={{
                          width: "100%",
                        }}
                        className={cx("text-input")}
                        variant="outlined"
                        inputProps={{
                          type: "number",
                        }}
                      />
                    </div>

                    <Button
                      onClick={() => {
                        setEdit(-1);
                      }}
                      variant="text"
                    >
                      Close
                    </Button>
                    <Button
                      onClick={() => {
                        updateOption({
                          id: edit.id,
                          name: edit.name,
                          value: "",
                          quantity: edit.quantity,
                          price: edit.price,
                        })
                          .then((res) => {
                            toast.success("Cập nhật option thành công");
                          })
                          .catch((err) => {
                            toast.error("Cập nhật option thất bại");
                            console.log(err);
                          });

                        setItems((prev) => {
                          const options = [...prev];

                          const item = options.find(
                            (option) => option.id === edit.id
                          );
                          item.name = edit.name;
                          item.price = edit.price;
                          item.quantity = edit.quantity;
                          return options;
                        });
                        setEdit(undefined);
                      }}
                      variant="text"
                    >
                      Save
                    </Button>
                  </Paper>
                </Dialog>
              )}
            </List>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <p>Option Name</p>
              <p>Price</p>
              <p>Quantity</p>
              <p></p>
            </div>
            <div className={cx("add-form")}>
              <input
                value={optionName}
                onChange={(e) => {
                  setOptionName(e.target.value);
                }}
                placeholder="Option name"
                className="form-control"
              />
              <input
                type="number"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                placeholder="Price"
                className="form-control"
              />
              <input
                type="number"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                placeholder="Price"
                className="form-control"
              />
              <Button
                onClick={() => {
                  if (optionName.trim() !== "" && price > 0 && quantity > 0) {
                    handleAddItem({ quantity, price, optionName });
                    setOptionName("");
                    setPrice(0);
                    setQuantity(0);
                  } else {
                    toast.error("Name, Price and Quantity must be filled");
                  }
                }}
                style={{ outline: "none" }}
                variant="contained"
              >
                <AddIcon></AddIcon>
              </Button>
            </div>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
