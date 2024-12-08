import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Fragment, useEffect, useState } from "react";
import { getProducts } from "../../Services/API/Products";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Pagination,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import { formatDay } from "../../Utils/time";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";
import { deleteProduct as delProduct } from "../../Services/API/Products";

export default function BasicTable() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [deleteProduct, setDeleteProduct] = useState("");

  const handleClose = () => {
    setDeleteProduct("");
  };

  const handleChange = (event, number) => {
    setPage(number);
    window.scrollTo(0, 0);
  };

  const handleDelete = (e) => {
    delProduct(deleteProduct)
      .then((res) => {
        setProducts((prev) => {
          const newState = [...prev];
          const filtered = newState.filter(
            (item) => item._id !== deleteProduct
          );
          toast.success("Xóa sản phẩm thành công");
          setDeleteProduct("");
          return filtered;
        });
      })
      .catch((err) => {
        toast.error("Xóa sản phẩm thất bại");
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts({ page: page, perPage: 20 })
      .then((res) => {
        setProducts(res.data);
        setTotalPage(res.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return (
    <>
      <div className="row page-titles mx-0">
        <div className="col p-md-0">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">
              <Link to="/admin/products">List Product</Link>
            </li>
          </ol>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Select</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Options</TableCell>
              <TableCell align="right">Create At</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
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
                  <Link to={`/admin/products/${product._id}`}>
                    {product.name}
                  </Link>
                </TableCell>
                <TableCell align="right">{product.category.name}</TableCell>
                <TableCell align="right">{product.options.length}</TableCell>
                <TableCell align="right">
                  {formatDay(product.createdAt)}
                </TableCell>

                <TableCell align="right">
                  <span
                    onClick={() => {
                      setDeleteProduct(product._id);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Fragment>
        <Dialog
          open={deleteProduct !== ""}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Do you want delete this product?"}
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
