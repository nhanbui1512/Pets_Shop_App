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

const cx = classNames.bind(styles);

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList({ items = [], setItems }) {
  const [optionName, setOptionName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [edit, setEdit] = useState(undefined);

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
                        <IconButton
                          onClick={() => {
                            setEdit(item);
                          }}
                          edge="end"
                          aria-label="delete"
                        >
                          <EditIcon />
                        </IconButton>

                        <IconButton
                          onClick={() => {
                            setItems((prev) => {
                              const newState = [...prev];
                              newState.splice(index, 1);
                              return newState;
                            });
                          }}
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
                      primary={item.name}
                      secondary={`${item.price}đ`}
                    />
                    <ListItemText primary={`${item.quantity} sản phẩm`} />
                  </ListItem>
                );
              })}

              <Dialog open={edit ? true : false}>
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
                      setEdit(undefined);
                    }}
                    variant="text"
                  >
                    Close
                  </Button>
                  <Button variant="text">Save</Button>
                </Paper>
              </Dialog>
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
                    setOptionName("");
                    setPrice(0);
                    setItems((prev) => {
                      const isExist = prev.find(
                        (item) => item.name === optionName
                      );
                      if (isExist) {
                        toast.error("Name option is existed");
                        return prev;
                      }
                      return [
                        ...prev,
                        {
                          name: optionName,
                          price: price,
                          quantity: quantity,
                          value: optionName,
                        },
                      ];
                    });
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
