import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Pagination,
  Stack,
} from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { deleteOrder, getOrders } from "../../Services/API/Ordes";
import { toast } from "react-toastify";

function ListOrder() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [orders, setOrders] = useState([]);

  const [open, setOpen] = useState("");

  const handleChange = (event, number) => {
    setPage(number);
    window.scrollTo(0, 0);
  };

  const handleClose = () => {
    setOpen("");
  };

  const handleDelete = (id) => {
    deleteOrder(open)
      .then((res) => {
        toast.success("Xóa đơn hàng thành công");
        setOrders((prev) => {
          const newState = [...prev];
          return newState.filter((order) => order._id !== open);
        });
        setOpen("");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Xóa đơn hàng thất bại");
      });
  };

  useEffect(() => {
    getOrders({ page: page, perPage: 20 }).then((res) => {
      setOrders(res.docs);
      setTotalPage(res.totalPages);
    });
  }, [page]);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Select</TableCell>
              <TableCell>Products</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">PhoneNumber</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <span>
                    <input type="checkbox" />
                  </span>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Link to={`/admin/orders/${order._id}`}>
                    {order.items?.map((item, index) => (
                      <p
                        key={index}
                      >{`${item.productId?.name} : ${item.quantity} cái`}</p>
                    ))}
                  </Link>
                </TableCell>
                <TableCell align="right">{order.address}</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">{order.phone}</TableCell>
                <TableCell align="right">
                  {`${order.total.toLocaleString("vi-VN", { currency: "VND" })}đ`}
                </TableCell>

                <TableCell
                  style={{
                    color: order.status === "PENDING" ? "orange" : "green",
                  }}
                  align="right"
                >
                  {order.status}
                </TableCell>

                <TableCell align="right">
                  <button
                    onClick={() => {
                      setOpen(order._id);
                    }}
                    style={{ padding: 8 }}
                  >
                    <span style={{ cursor: "pointer" }}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <Fragment>
            <Dialog
              open={open !== ""}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Do you want delete this order?"}
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
        </Table>
      </TableContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            mt: 2,
          }}
          spacing={2}
        >
          <Pagination
            onChange={handleChange}
            count={totalPage}
            color="primary"
          />
        </Stack>
      </div>
    </>
  );
}
export default ListOrder;
