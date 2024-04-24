import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { getProducts } from "../../Services/API/Products";
import { Pagination, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { formatDay } from "../../Utils/time";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function BasicTable() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);

  const handleChange = (event, number) => {
    setPage(number);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getProducts({ page: page, perPage: 20 })
      .then((res) => {
        setProducts(res.docs);
        setTotalPage(res.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return (
    <>
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
                <TableCell align="right">
                  {product.categoryID[0]?.name}
                </TableCell>
                <TableCell align="right">
                  {product.variantOptions.length}
                </TableCell>
                <TableCell align="right">
                  {formatDay(product.createdAt)}
                </TableCell>

                <TableCell align="right">
                  <span style={{ cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
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
