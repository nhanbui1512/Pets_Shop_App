import classNames from "classnames/bind";
import styles from "./Orders.module.scss";
import CheckOrder from "../../Components/CheckOrder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { searchOrder } from "../../Services/API/Orders";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const cx = classNames.bind(styles);

function Orders() {
  const [searchResult, setSearchResult] = useState([]);
  const handleSearchSubmit = (form) => {
    searchOrder({
      value: form.searchValue,
      type: form.type,
      page: 1,
      perPage: 10,
    })
      .then((res) => {
        setSearchResult(res.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={cx("wrapper")}>
      <CheckOrder onSearchSubmit={handleSearchSubmit} />
      <div className={cx("search-result")}>
        {searchResult.length === 0 && (
          <div className={cx("no-infor")}>
            <p>Không tìm thấy dữ liệu đơn hàng</p>
            <span className={cx("icon-container")}>
              <FontAwesomeIcon
                color="#999"
                fontSize={100}
                icon={faCreditCard}
              />
            </span>
          </div>
        )}

        {searchResult.length > 0 && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">PhoneNumber</TableCell>
                  <TableCell align="right">Total</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchResult.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.nameUser}
                    </TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell align="right">
                      {row.total.toLocaleString("vi-VN", { currency: "VND" })}
                    </TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
}

export default Orders;
